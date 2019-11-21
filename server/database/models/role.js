export default (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'Role',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      timestamps: true
    }
  );
  Role.associate = function(models) {
    // associations can be defined here
    Role.belongsToMany(models.User, {
      as: 'RolesOfUser',
      through: 'UserRoles',
      foreignKey: 'roleId'
    });
    Role.belongsToMany(models.Group, {
      as: 'RolesOfGroup',
      through: 'GroupRoles',
      foreignKey: 'roleId'
    });
    Role.belongsToMany(models.Permission, {
      as: 'PermmisionsOfRole',
      through: 'RolePermissions',
      foreignKey: 'roleId'
    });
  };
  return Role;
};
