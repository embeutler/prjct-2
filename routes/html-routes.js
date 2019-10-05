// var db = require("../models");
// var sequelize = require("sequelize");
var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var businesses = require("../models");
module.exports = function(app) {
  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Create all our routes and set up logic within those routes where required.
  router.get("/api/all/taco", function(req, res) {
    businesses.all(function(data) {
      var hbsObject = {
        businesses: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
