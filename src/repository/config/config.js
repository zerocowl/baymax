module.exports = {
  development: {
    database: 'baymax_server_development',
    dialect: 'mysql',
    host: '127.0.0.1',
    password: 'baymaxserverpassword',
    pool: {
      max: 5,
      min: 1,
      idle: 20000,
      acquire: 20000,
      evict: 60000,
      handleDisconnects: true
    },
    port: '3306',
    seederStorage: 'sequelize',
    username: 'baymax_server'
  },
  'development:docker': {
    database: 'baymax_server_development',
    dialect: 'mysql',
    host: 'db',
    operatorsAliases: false,
    password: 'baymaxserverpassword',
    pool: {
      max: 5,
      min: 0,
      idle: 20000,
      acquire: 20000
    },
    port: '3306',
    seederStorage: 'sequelize',
    username: 'baymax_server'
  }
};
