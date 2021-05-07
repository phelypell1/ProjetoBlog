const Sequelize = require('sequelize');
const connections = require('../database/database');

const Category = connections.define('Category', {
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Category.sync({force: true});

module.exports = Category;