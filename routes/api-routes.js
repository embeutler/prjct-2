var db = require("../models");
var sequelize = require("sequelize");

module.exports = function(app) {
  // Get all reviews
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({ order: sequelize.col("stars") }).then(function(
      dbReviews
    ) {
      res.json(dbReviews);
    });
  });

  app.get("/api/all", function(req, res) {
    db.Businesses.findAll({
      include: [{ model: db.Reviews }],
      order: sequelize.col("stars")
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Gets all businesses
  app.get("/api/businesses", function(req, res) {
    db.Businesses.findAll({
      order: sequelize.col("stars")
    }).then(function(dbBusinesses) {
      res.json(dbBusinesses);
    });
  });

  //get taco
  var express = require("express");

  var router = express.Router();

  // Import the model (cat.js) to use its database functions.
  var businesses = require("../models");

  // Create all our routes and set up logic within those routes where required.
  router.get("/", function(req, res) {
    businesses.all(function(data) {
      var hbsObject = {
        businesses: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // Gets an reviews by id
  app.get("/api/reviews/:id", function(req, res) {
    db.Reviews.findAll({
      where: { id: req.params.id }
    }).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  // Delete an business by id
  app.get("/api/businesses/:id", function(req, res) {
    db.business
      .findAll({
        where: { id: req.params.id },
        order: sequelize.col("stars")
      })
      .then(function(dbBusinesses) {
        res.json(dbBusinesses);
      });
  });
};
