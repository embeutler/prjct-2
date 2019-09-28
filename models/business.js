var Businesses;

module.exports = function(sequelize, DataTypes) {
  // Creates a "Businesses" model that matches up with DB
  var Businesses = sequelize.define("Businesses", {
    businessId: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    stars: DataTypes.FLOAT,
    reviewCount: DataTypes.INTEGER
  });

  Businesses.hasMany(Reviews, {
    foreignKey: "businessId",
    targetKey: "businessId"
  });

  // Businesses.associate = function(models) {
  //   Businesses.hasMany(models.Reviews, {
  //     onDelete: "cascade"
  //   });
  // };

  return Businesses;
};
