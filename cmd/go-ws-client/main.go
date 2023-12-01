//go:build js && wasm

package main

import (
	"context"
	"syscall/js"

	"nhooyr.io/websocket"
)

func main() {
	ctx := context.Background()
	conn, _, err := websocket.Dial(ctx, "ws://localhost:8080/ws-chat", nil)
	if err != nil {
		panic(err)
	}

	js.Global().Set("sendMessageGo", js.FuncOf(func(_ js.Value, args []js.Value) any {
		wr, err := conn.Writer(ctx, websocket.MessageText)
		if err != nil {
			panic(err)
		}
		wr.Write([]byte(args[0].String()))
		wr.Close()
		// returning a Promise
		return js.Global().Get("Promise").New(js.FuncOf(func(_ js.Value, args []js.Value) any {

			// args[0] is resolve callback
			// args[1] is reject callback

			// spawining a goroutine because of conn.Read() blocking nature
			go func() {
				_, bb, err := conn.Read(ctx)
				if err != nil {
					// if there is an error, reject the promise, calling the reject callback
					args[1].Invoke(err.Error())
					return
				}
				// if there is no error then pass to resolve the bytes that comes from the server
				args[0].Invoke(string(bb))
			}()
			// also the constructor must return inmediatly, cannot wait for async operations
			return nil
		}))
	}))
	waitCh := make(chan struct{})
	<-waitCh
}
