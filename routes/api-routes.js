var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Reviews.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });
};
