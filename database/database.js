const sequelize = require('sequelize')

const connection = new sequelize('Blog', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres',
    timezone: '-03:00'
});

module.exports = connection;