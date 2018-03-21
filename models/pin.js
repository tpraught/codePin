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
    content: {
      type: DataTypes.TEXT
    },
    link: {
      type: DataTypes.STRING
    }
  });
  
  // Pin cant be created without a user
  Pin.associate = function(models) {
    Pin.belongsTo(models.User, {
      foreignKey: {
        // allowNull: false
      }
    });
  };

  return Pin;
};

