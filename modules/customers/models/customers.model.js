module.exports = (sequelize, Sequelize) => {
  const CUSTOMERS_TABLE = 'customers';
  const config = {
    sequelize,
    tableName: CUSTOMERS_TABLE,
    modelName: 'Customers',
    timestamps: false,
  };
  const customerSchema = {
    id: {
      primaryKey: true,
      unique: true,
      allowNull: false, //por verificar
      type: Sequelize.INTEGER(1).UNSIGNED,
    },
    document_type: {
      type: Sequelize.STRING,
    },
    customer_type: {
      type: Sequelize.STRING,
    },
    identification_number: {
      type: Sequelize.STRING,
    },
    full_name: {
      type: Sequelize.STRING,
    },
    address_customer: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    cellphone: {
      type: Sequelize.STRING,
    },
    creation_date: {
      type: Sequelize.DATE,
    },
    state_customer: {
      type: Sequelize.STRING,
    },
    last_call: {
      type: Sequelize.DATE,
    },
    recurrence: {
      type: Sequelize.INTEGER(1).UNSIGNED,
    },
  };
  const parkingVehicles = sequelize.define(CUSTOMERS_TABLE, customerSchema);

  return parkingVehicles;
};
