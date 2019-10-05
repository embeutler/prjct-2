var path = require("path");
var db = require("../models");
var sequelize = require("sequelize");

module.exports = function(app) {
  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
