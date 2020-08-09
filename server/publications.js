import { Meteor } from "meteor/meteor";
import Contact from "../collections/contact";

/**
 * Meteor uses a "publication/subscription" system to "publish" data to the
 * clients. On the server, we publish data and on the client we subscribe to
 * this data (check: imports/ui/examples/resumes/index.jsx line 81)
 */

// This publication allows clients to access the Resumes documents
Meteor.publishComposite("contact", function () {
  /**
   * You should check the clients permission and grant access if appropiate
   * Package recomendation for Roles management: https://github.com/nicolaslopezj/roles
   */
  return {
    find: function () {
      return Contact.find();
    },
  };
});
