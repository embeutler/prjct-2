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
      res.render(dbExamples);
    });
  });

  app.post("/search", function(req, res) {
    console.log(req.body.name);
    var search = req.body.name;
    db.Businesses.findAll({
      where: { name: search }
    }).then(function(result) {
      var businessObject = {
        business: result.business
      };
      console.log(result);
      res.render("index", businessObject);
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
