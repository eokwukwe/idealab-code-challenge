export default (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    'Permission',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      permission: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Permission.associate = function(models) {
    // associations can be defined here
    Permission.belongsToMany(models.Role, {
      as: 'PermittedRoles',
      through: 'RolePermissions',
      foreignKey: 'permissionId'
    });
  };
  return Permission;
};
