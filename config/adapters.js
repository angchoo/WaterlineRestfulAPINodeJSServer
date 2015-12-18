var mysqlAdapter = require('sails-mysql');

module.exports = {
    connections: {
        myLocalMySql: {
            adapter: 'mysql',
            host: 'localhost',
            database: 'foobar',
            port: 3306,
            user: 'root',
            password: 'YourPASSWORD'
        }
    },
    defaults: {
        migrate: 'alter'
    },
    adapters: {
        default: mysqlAdapter,
        mysql: mysqlAdapter
    }
};