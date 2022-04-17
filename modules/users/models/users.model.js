module.exports = (sequelize, Sequelize) => {
  const USERS_TABLE = 'users';

  const usersSchema = {
    id: {
      primaryKey: true,
      unique: true,
      allowNull: false, //por verificar
      type: Sequelize.INTEGER(1).UNSIGNED,
    },
    document_type: {
      type: Sequelize.STRING,
    },
    identification_number: {
      type: Sequelize.STRING,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    afiliateid: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    cellphone: {
      type: Sequelize.STRING,
    },
    creation_date: {
      type: Sequelize.DATE,
    },
  };
  const users = sequelize.define(USERS_TABLE, usersSchema);

  return users;
};
