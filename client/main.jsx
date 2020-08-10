import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "./main.html";
import { createStore } from "redux";
import { currentUser } from "./actions/index";
import { homePage } from "./actions/index";
import { itemClickState } from "./actions/index";
import { addFormState } from "./actions/index";
import { idSelectedState } from "./actions/index";

import { combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  currentUser,
  homePage,
  itemClickState,
  addFormState,
  idSelectedState,
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

if (Meteor.isClient) {
  Meteor.startup(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById("react-target")
    );
  });
}
