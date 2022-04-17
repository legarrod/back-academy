const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4(2),
  },
  document_type: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  role: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
    defaultValue: 'user',
  },
  identification_number: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  full_name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  sponsor: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
    defaultValue: 'platform',
  },
  afiliateid: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  address: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: false,
  },
  password: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  cellphone: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'creation_date',
    defaultValue: Sequelize.NOW,
  },
};

class User extends Model {
  static associate(models) {
    this.hasOne(models.Home, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      as: 'home',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
