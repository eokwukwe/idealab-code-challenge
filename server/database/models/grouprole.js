'use strict';
module.exports = (sequelize, DataTypes) => {
  const GroupRole = sequelize.define(
    'GroupRole',
    {
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Role',
          key: 'id',
          as: 'roleId'
        }
      },
      groupId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Group',
          key: 'id',
          as: 'groupId'
        }
      }
    },
    {
      timestamps: true
    }
  );
  GroupRole.associate = function(models) {
    // associations can be defined here
  };
  return GroupRole;
};