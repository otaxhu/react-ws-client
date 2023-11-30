import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
if (!root)	throw "root is null";

createRoot(root)
	.render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
