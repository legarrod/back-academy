const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./user.model');

const HOME_TABLE = 'home';

const homeSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    field: 'home_name',
    allowNull: false,
    type: DataTypes.STRING,
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW,
  },
};

class Home extends Model {
  static associate(models) {
    this.belongsTo(models.User, {
      as: 'home',
    });
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: HOME_TABLE,
      modelName: 'Home',
      timestamps: false,
    };
  }
}

module.exports = { homeSchema, HOME_TABLE, Home };
