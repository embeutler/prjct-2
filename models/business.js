module.exports = function(sequelize, DataTypes) {
  // Creates a "reviews" model that matches up with DB
  var Business = sequelize.define("business", {
    businessId: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    reviewCount: DataTypes.INTEGER,
    attributes: {
      RestaurantsTakeOut: DataTypes.STRING,
      BusinessParking: {
        garage: DataTypes.BOOLEAN,
        street: DataTypes.BOOLEAN,
        validated: DataTypes.BOOLEAN,
        lot: DataTypes.BOOLEAN,
        valet: DataTypes.BOOLEAN
      }
    },
    categories: [DataTypes.STRING],
    hours: {
      Monday: DataTypes.STRING,
      Tuesday: DataTypes.STRING,
      Wednesday: DataTypes.STRING,
      Thursday: DataTypes.STRING,
      Friday: DataTypes.STRING,
      Saturday: DataTypes.STRING,
      Sunday: DataTypes.STRING
    }
  });

  return Business;
};
