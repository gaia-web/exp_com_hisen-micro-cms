/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";

import "./index.css";
import "virtual:uno.css";

const root = document.getElementById("root");

render(() => <App />, root!);
