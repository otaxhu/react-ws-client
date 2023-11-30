import { useState } from "react";

/**
 * @typedef {object} ChatRoomProps
 * @prop {string=} name The name of the person
 *
 */
/**
 * ChatRoom Component
 *
 * @type {React.FC<React.PropsWithChildren<ChatRoomProps>>}
 */
const ChatRoom = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)}>Click</button>
			<p>
				chatroom works!!
			</p>
		</>
	);
};

export default ChatRoom;
