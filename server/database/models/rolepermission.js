export default (sequelize, DataTypes) => {
  const RolePermission = sequelize.define(
    'RolePermission',
    {
      permissionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId'
        }
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Role',
          key: 'id',
          as: 'roleId'
        }
      }
    },
    {
      timestamps: true
    }
  );
  RolePermission.associate = function(models) {
    // associations can be defined here
  };
  return RolePermission;
};
