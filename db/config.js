require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_BD,
    password: process.env.PASWORD_BD,
    database: process.env.NAME_BD,
    host: process.env.HOST_NAME_MYSQL,
    dialect: 'mysql',
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.USER_BD,
    password: process.env.PASWORD_BD,
    database: process.env.NAME_BD,
    host: process.env.HOST_NAME_MYSQL,
    dialect: 'mysql',
    // dialectOptions: {
    //   ssl: {
    //     ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
    //   }
    // }
  },
};
