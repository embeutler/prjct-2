module.exports = (sequelize, DataTypes) => {
  // Creates a "reviews" model that matches up with DB
  var Reviews = sequelize.define("Reviews", {
    reviewId: DataTypes.STRING,
    userId: DataTypes.STRING,
    businessId: DataTypes.STRING,
    date: DataTypes.STRING,
    text: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    useful: DataTypes.INTEGER,
    funny: DataTypes.INTEGER,
    cool: DataTypes.INTEGER
  });
  // Reviews.associate = function(models) {
  //   Reviews.belongsTo(models.Businesses, {
  //     foreignKey: "businessId",
  //     targetKey: "businessId"
  //   });
  // };

  /*Reviews.associate = function(models) {
    Reviews.belongsTo(models.Businesses, {
      onDelete: "cascade"
    });
  };

  Reviews.hasOne(Businesses);
*/

  return Reviews;
};
