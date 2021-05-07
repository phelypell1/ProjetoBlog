const express = require('express');
const app = express();
const connection = require('./database/database')
const categoriesCotroller = require('./categories/CategoriesController');
const ArticlesController = require('./articles/ArticlesController');

const categories = require('./categories/Category');
const articles = require('./articles/Article');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

connection.authenticate()
.then(() => console.log('Conectado ao banco'))
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.render('index')
});

app.use('/', categoriesCotroller);
app.use('/', ArticlesController);

app.listen(3001, () => {
    console.log('Express listening on 3001')
});

