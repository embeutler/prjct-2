module.exports = function(sequelize, DataTypes) {
  // Creates a "reviews" model that matches up with DB
  var Reviews = sequelize.define("reviews", {
    review_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    business_id: DataTypes.STRING,
    date: DataTypes.STRING,
    text: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    useful: DataTypes.INTEGER,
    funny: DataTypes.INTEGER,
    cool: DataTypes.INTEGER
  });

  return Reviews;
};
