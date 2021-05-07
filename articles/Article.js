const Sequelize = require('sequelize');
const connections = require('../database/database');
const Category = require('../categories/Category')

const Articles = connections.define('Articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    body:{
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

//Relacionamento um para muitos
Category.hasMany(Articles);
//////////////////////////////
//Pertence a uma categoria.
//Relacionamento 1 para 1
Articles.belongsTo(Category);


//Articles.sync({force: true});

module.exports = Articles;