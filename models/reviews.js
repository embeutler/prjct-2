module.exports = function(sequelize, DataTypes) {
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

  // Business.hasMany(Reviews, { foreignKey: "businessId" });
  // Reviews.belongsTo(Businesses, { foreignKey: "businessId" });
  // Reviews.find({ where: { }, include: [User]})

  // Reviews.belongsTo(Businesses, {
  //   foreignKey: "businessId",
  //   targetKey: "businessId"
  // });

  // Reviews.associate = function(models) {
  //   Reviews.belongsTo(models.Business, {
  //     onDelete: "cascade"
  //   });
  // };

  return Reviews;
};
