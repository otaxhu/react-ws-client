package main

import (
	"context"
	"embed"
	"io/fs"
	"log"
	"net/http"

	"nhooyr.io/websocket"
)

//go:embed dist/*
var files embed.FS

func main() {
	sub, err := fs.Sub(files, "dist")
	if err != nil {
		log.Fatal(err)
	}
	ctx := context.Background()
	go func() {
		http.ListenAndServe(":3000", http.FileServer(http.FS(sub)))
	}()

	http.HandleFunc("/ws-chat", func(w http.ResponseWriter, r *http.Request) {
		conn, err := websocket.Accept(w, r, &websocket.AcceptOptions{
			InsecureSkipVerify: true,
		})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		for {
			_, bb, err := conn.Read(ctx)
			if err != nil {
				conn.Close(websocket.StatusInternalError, err.Error())
				return
			}
			wr, err := conn.Writer(ctx, websocket.MessageText)
			if err != nil {
				conn.Close(websocket.StatusInternalError, err.Error())
				return
			}
			wr.Write(bb)
			wr.Close()
		}
	})
	http.ListenAndServe(":8080", http.DefaultServeMux)
}
