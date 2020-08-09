import { Meteor } from "meteor/meteor";
import "../collections/contact";
Meteor.startup(() => {
  if (!Accounts.findUserByUsername("admin")) {
    Accounts.createUser({
      username: "admin",
      password: "admin",
    });
  }
});
