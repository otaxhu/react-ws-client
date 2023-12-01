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
	const [msgClient, setMsgClient] = useState("");
	const [msgServer, setMsgServer] = useState([]);

	/**
	 * @type {React.FormEventHandler<HTMLFormElement>}
	 */
	const handleOnSubmit = (e) => {
		e.preventDefault();
		sendMessageGo(msgClient)
			.then(res => setMsgServer([...msgServer, res]));
	};

	return (
		<>
			{msgServer.map((val, i) => (
				<p key={i}>
					{i}
					:
					{" "}
					{val}
				</p>
			))}
			<form onSubmit={handleOnSubmit}>
				<input onChange={(e) => setMsgClient(e.target.value)} type="text" placeholder="Escribe tu mensaje" />
				<input type="submit" value="submit" />
			</form>
		</>
	);
};

export default ChatRoom;
