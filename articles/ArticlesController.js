const express = require("express");
const router = express.Router();
const category = require("../categories/Category");
const Articles = require('./Article')
const slug = require('slugify')

router.get("/admin/articles", (req, res) => {
  res.send("Rota de Artigos");
});

router.get("/admin/articles/new", (req, res) => {
  category.findAll().then((category) => {
    res.render("admin/articles/new", {category: category});
  });
});

router.post('/articles/save', (req, res) => {
  var title = req.body.title;
  var body = req.body.body;
  var category = req.body.category;

  Articles.create({
    title: title, 
    slug: slug(title),
    body: body,
    CategoryId: category
  }).then(() => {
  res.render("/admin/articles")
  }).catch(err => {
    console.log(err);
  })
})

module.exports = router;
