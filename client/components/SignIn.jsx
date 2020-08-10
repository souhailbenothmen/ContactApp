import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Container from "@material-ui/core/Container";
import { Meteor } from "meteor/meteor";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../actions/allActions";
import { useHistory } from "react-router-dom";
import { useStylesSignIn } from "../common/style";

export const SignIn = () => {
  console.log("submit true");
  const classes = useStylesSignIn();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        console.log(error);
      } else {
        const user = { name: Meteor.userId() };
        dispatch(setUser(user));
        history.push("/listcontact");
      }
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        Sign in
        <form className={classes.form} onSubmit={submit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.currentTarget.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
};
