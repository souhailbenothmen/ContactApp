import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./main.html";

if (Meteor.isClient) {
  Meteor.startup(() => {
    render(<App />, document.getElementById("react-target"));
  });
}
