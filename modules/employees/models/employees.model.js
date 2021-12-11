module.exports = (sequelize, Sequelize) => {
  const EMPLOYEES_TABLE = 'employees';
  const config = {
    sequelize,
    tableName: EMPLOYEES_TABLE,
    modelName: 'Parking',
    timestamps: false,
  };
  const parkingSchema = {
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
    address: {
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
  };
  const parkingVehicles = sequelize.define(EMPLOYEES_TABLE, parkingSchema);

  return parkingVehicles;
};
