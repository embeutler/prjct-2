module.exports = function(sequelize, DataTypes) {
  // Creates a "reviews" model that matches up with DB
  var Business = sequelize.define("Business", {
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

  Business.associate = function(models) {
    Business.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

  return Business;
};
