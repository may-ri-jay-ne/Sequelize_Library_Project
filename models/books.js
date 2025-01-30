const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Books extends Model {}

Books.init(
  {
    // Model attributes are defined here
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
     defaultValue: DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
       allowNull: false
    },
    author: {
      type: DataTypes.STRING,
       allowNull: false
    },
    progress: {
      type: DataTypes.ENUM('Currently reading', 'Next up', 'Finished'),
       allowNull: false,
       defaultValue: "Currently reading"
    },
    genre: {
      type: DataTypes.STRING,
       allowNull: false
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Books', // We need to choose the model name
    tableName: 'Books',
    timestamps: true

  },
);

module.exports = Books