// module.exports = function(sequelize, DataTypes) {
//   // Creates a "reviews" model that matches up with DB
//   var User = sequelize.define("User", {
//     userId: DataTypes.STRING,
//     name: DataTypes.STRING,
//     reviewCount: DataTypes.STRING,
//     yelpingSince: DataTypes.STRING,
//     friends: [DataTypes.STRING],
//     useful: DataTypes.INTEGER,
//     funny: DataTypes.INTEGER,
//     cool: DataTypes.INTEGER,
//     fans: DataTypes.INTEGER,
//     elite: [DataTypes.INTEGER],
//     averageStars: DataTypes.INTEGER,
//     complimentHot: DataTypes.STRING,
//     complimentMore: DataTypes.STRING,
//     complimentProfile: DataTypes.STRING,
//     complimentCute: DataTypes.STRING,
//     complimentList: DataTypes.STRING,
//     complimentNote: DataTypes.STRING,
//     complimentPlain: DataTypes.STRING,
//     complimentCool: DataTypes.STRING,
//     complimentFunny: DataTypes.STRING,
//     complimentWriter: DataTypes.STRING,
//     complimentPhotos: DataTypes.STRING
//   });

//   User.associate = function(models) {
//     User.belongsTo(models.Review, {
//       onDelete: "cascade"
//     });
//   };

//   return User;
// };
