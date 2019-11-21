import bcrypt from 'bcryptjs';
import authentication from '../../middlewares/authentication'

export default (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    },
    {}
  );
  User.beforeCreate(async User => {
    User.password = await User.generatePasswordHash();
  });

  User.prototype.generatePasswordHash = async function generatePasswordHash() {
    const saltRounds = 10;
    return bcrypt.hash(this.password, saltRounds);
  };

  User.prototype.validatePassword = async function validatePassword(password) {
    return bcrypt.compare(password, this.password);
  };

  User.prototype.getSafeDataValues = function getSafeDataValues() {
    const { password, ...data } = this.dataValues;
    return data;
  };

  User.prototype.generateToken = function generateToken() {
    return authentication.generateToken(this.id);
  };

  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Role, {
      as: 'UserTasks',
      through: 'UserRoles',
      foreignKey: 'userId'
    });
    User.belongsToMany(models.Group, {
      as: 'MemberOf',
      through: 'UserGroups',
      foreignKey: 'userId'
    });
  };
  return User;
};
