const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4(2),
  },
  refererId: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
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
  active: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    unique: false,
    defaultValue: false,
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
  },
  referencedBy: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
  },
  afiliateid: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: true,
  },
  bankAcount: {
    allowNull: true,
    type: DataTypes.STRING,
    unique: false,
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
  dateActivation: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'date_activation',
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
