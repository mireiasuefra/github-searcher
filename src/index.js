import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ThemeProvider } from "@primer/react";

ReactDOM.render(
  <ThemeProvider colorMode="night">
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
