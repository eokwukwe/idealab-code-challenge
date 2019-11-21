export default (sequelize, DataTypes) => {
  const UserRole = sequelize.define(
    'UserRole',
    {
      userId: {
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
  UserRole.associate = function(models) {
    // associations can be defined here
  };
  return UserRole;
};
