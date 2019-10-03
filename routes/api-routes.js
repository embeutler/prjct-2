var db = require("../models");
var sequelize = require("sequelize");
const Op = sequelize.Op;

module.exports = function(app) {
  // Get all reviews
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

  app.get("/api/all", function(req, res) {
    db.Businesses.findAll({ include: [{ model: db.Reviews }] }).then(function(
      dbExamples
    ) {
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

  // Gets an reviews by id
  app.get("/api/reviews/:id", function(req, res) {
    db.Reviews.findAll({ where: { id: req.params.id } }).then(function(
      dbReviews
    ) {
      res.json(dbReviews);
    });
  });

  // Delete an business by id
  app.get("/api/businesses/:id", function(req, res) {
    db.business
      .findAll({ where: { id: req.params.id } })
      .then(function(dbBusinesses) {
        res.json(dbBusinesses);
      });
  });
};
