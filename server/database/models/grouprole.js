export default (sequelize, DataTypes) => {
  const GroupRole = sequelize.define(
    'GroupRole',
    {
      roleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Role',
          key: 'id',
          as: 'roleId'
        }
      },
      groupId: {
        type: DataTypes.INTEGER,
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
