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
    businessId: {
      type: DataTypes.STRING,
      references: {
        model: "Businesses",
        key: "businessId"
      }
    },
    date: DataTypes.STRING,
    text: DataTypes.STRING,
    stars: DataTypes.INTEGER,
    useful: DataTypes.INTEGER,
    funny: DataTypes.INTEGER,
    cool: DataTypes.INTEGER
  });
  Reviews.associate = function(models) {
    Reviews.belongsTo(models.Businesses, {
      foreignKey: "businessId"
    });
  };

  return Reviews;
};
