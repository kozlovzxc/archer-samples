'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    data: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return post;
};