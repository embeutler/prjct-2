module.exports = function(sequelize, DataTypes) {
  // Creates a "Businesses" model that matches up with DB
  var Businesses = sequelize.define("Businesses", {
    businessId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
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

  Businesses.associate = function(models) {
    Businesses.hasMany(models.Reviews, {
      foreignKey: "businessId"
    });
  };

  return Businesses;
};
