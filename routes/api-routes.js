var db = require("../models");

module.exports = function(app) {
  // Get all reviews
  app.get("/api/reviews", function(req, res) {
    db.Reviews.findAll({}).then(function(dbReviews) {
      res.json(dbReviews);
    });
  });

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
