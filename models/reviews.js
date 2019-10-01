module.exports = function(sequelize, DataTypes) {
  // Creates a "reviews" model that matches up with DB
  var Reviews = sequelize.define("Reviews", {
    reviewId: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
      unique: true
    },
    userId: DataTypes.STRING,
<<<<<<< HEAD
=======
    businessId: {
      type: DataTypes.STRING,
      references: {
        model: "Businesses",
        key: "businessId"
      }
    },
>>>>>>> 499c20fe1c149187c55b37e42c7251062c236be1
    date: DataTypes.STRING,
    text: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    useful: DataTypes.INTEGER,
    funny: DataTypes.INTEGER,
    cool: DataTypes.INTEGER,
    businessId: {
      type: DataTypes.STRING,
      references: {
        model: "Businesses",
        key: "businessId"
      }
    }
  });
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Businesses, {
      foreignKey: "businessId"
    });
  };

  return Reviews;
};
