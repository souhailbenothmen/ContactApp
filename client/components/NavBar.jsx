import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../actions/allActions";
import { itemClick } from "../actions/allActions";
import { useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { styleNavbar, styleBoxNavbar } from "../common/style";
export const NavBar = () => {
  let history = useHistory();
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const setStateItemClick = (value) => {
    const item = { name: value };
    dispatch(itemClick(item));
  };
  return (
    <AppBar position="fixed">
      <Toolbar style={styleBoxNavbar}>
        <div style={{ width: "20%" }}>
          <Link
            style={styleNavbar}
            to="/"
            onClick={() => setStateItemClick("Acceuil")}
          >
            Acceuil
          </Link>
          <Link
            style={styleNavbar}
            to="/contact"
            onClick={() => setStateItemClick("Contact")}
          >
            Contact
          </Link>
          {currentUser.loggedIn && (
            <Link
              style={styleNavbar}
              to="/listcontact"
              onClick={() => setStateItemClick("List contact")}
            >
              List contact
            </Link>
          )}
        </div>
        <div style={{ width: "10%" }}>
          {!currentUser.loggedIn && (
            <Link
              style={styleNavbar}
              to="/signin"
              onClick={() => setStateItemClick(" Se connecter")}
            >
              Se connecter <LockOutlinedIcon style={{ width: "20px" }} />
            </Link>
          )}
          {currentUser.loggedIn && (
            <a
              style={styleNavbar}
              onClick={() => {
                Meteor.logout();
                dispatch(logOut());
                setStateItemClick("Se deconnecter");
                history.push("/");
              }}
            >
              Se deconnecter <LockOutlinedIcon style={{ width: "20px" }} />
            </a>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};
