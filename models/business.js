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

  // Businesses.hasMany(Reviews, {
  //   foreignKey: "businessId",
  //   targetKey: "businessId"
  // });

  return Businesses;
};

// module.exports = function(sequelize, DataTypes) {
//   // Creates a "reviews" model that matches up with DB
//   var Reviews = sequelize.define("Reviews", {
//     reviewId: DataTypes.STRING,
//     userId: DataTypes.STRING,
//     businessId: DataTypes.STRING,
//     date: DataTypes.STRING,
//     text: DataTypes.STRING,
//     stars: DataTypes.INTEGER,
//     useful: DataTypes.INTEGER,
//     funny: DataTypes.INTEGER,
//     cool: DataTypes.INTEGER
//   });

//   Reviews.belongsTo(Businesses, {
//     foreignKey: "businessId",
//     targetKey: "businessId"
//   });

//   return Reviews;
// };
