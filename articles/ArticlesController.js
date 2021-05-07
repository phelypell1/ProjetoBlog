const express = require("express");
const router = express.Router();
const category = require("../categories/Category");

router.get("/articles", (req, res) => {
  res.send("Rota de Artigos");
});

router.get("/admin/articles/new", (req, res) => {
  category.findAll().then((category) => {
    res.render("admin/articles/new", {category: category});
  });
});

module.exports = router;
