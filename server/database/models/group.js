export default (sequelize, DataTypes) => {
  const Group = sequelize.define(
    'Group',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      group: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }
    },
    {
      timestamps: true
    }
  );
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsToMany(models.Role, {
      as: 'GroupTasks',
      through: 'GroupRoles',
      foreignKey: 'groupId'
    });
    Group.belongsToMany(models.User, {
      as: 'GroupedUsers',
      through: 'UserGroups',
      foreignKey: 'groupId'
    });
  };
  return Group;
};
