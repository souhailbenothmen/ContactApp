import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";

const style = {
  textDecoration: "none",
  color: "white",
  margin: "1%",
  fontSize: "16px",
  fontFamily: "Arial",
  fontWeight: "500",
};
export const NavBar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link style={style} to="/">
          Acceuil
        </Link>
        <Link style={style} to="/contact">
          Contact
        </Link>
        <Link style={style} to="/signin">
          Se connecter
        </Link>
      </Toolbar>
    </AppBar>
  );
};
