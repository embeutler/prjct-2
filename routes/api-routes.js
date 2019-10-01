var db = require("../models");

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
  // app.get("/api/authors", function (req, res) {
  //   // 1. Add a join to include all of each Author's Posts
  //   db.Author.findAll({ include: [db.Post] }).then(function (dbAuthor) {
  //     res.json(dbAuthor);
  //   });
  // });
  // Gets all businesses
  app.get("/api/businesses", function(req, res) {
    db.Businesses.findAll({}).then(function(dbBusinesses) {
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
