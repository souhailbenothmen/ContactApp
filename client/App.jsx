import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { SignIn } from "./components/SignIn";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
};
