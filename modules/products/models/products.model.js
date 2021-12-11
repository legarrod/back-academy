module.exports = (sequelize, Sequelize) => {
  const PRODUCTS_TABLE = 'products';
  const config = {
    sequelize,
    tableName: PRODUCTS_TABLE,
    modelName: 'Parking',
    timestamps: false,
  };
  const productsSchema = {
    id: {
      primaryKey: true,
      unique: true,
      allowNull: false, //por verificar
      type: Sequelize.INTEGER(1).UNSIGNED,
    },
    sku: {
      type: Sequelize.STRING,
    },
    name_product: {
      type: Sequelize.STRING,
    },
    photo_link: {
      type: Sequelize.STRING,
    },
    descriptionProd: {
      type: Sequelize.STRING,
    },
    creation_date: {
      type: Sequelize.DATE,
    },
    state_products: {
      type: Sequelize.INTEGER(2),
    },
  };
  const products = sequelize.define(PRODUCTS_TABLE, productsSchema);

  return products;
};
