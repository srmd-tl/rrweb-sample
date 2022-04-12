import { StrictMode } from "react";
import ReactDOM from "react-dom";
import rrwebPlayer from "rrweb-player";
import "@posthog/react-rrweb-player/dist/index.css";
import { Player } from "@posthog/react-rrweb-player";

import events from "./events.json";

new rrwebPlayer({
  target: document.body, // customizable root element
  props: {
    events
  }
});
