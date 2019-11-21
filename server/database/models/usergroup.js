export default (sequelize, DataTypes) => {
  const UserGroup = sequelize.define(
    'UserGroup',
    {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'User',
          key: 'id',
          as: 'userId'
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
  UserGroup.associate = function(models) {
    // associations can be defined here
  };
  return UserGroup;
};