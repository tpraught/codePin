module.exports = function(sequelize, DataTypes) {
    
  var Pin = sequelize.define("Pin", {
      
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    language: {
      type: DataTypes.STRING
    },
    media_type: {
      type: DataTypes.STRING
    },
    content: {
      type: DataTypes.STRING
    }
  });
  return Pin;
};

