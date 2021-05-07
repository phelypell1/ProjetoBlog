const express = require("express");
const router = express.Router();
const category = require("./Category");
const slug = require("slugify");

router.get("/admin/categories/new", (req, res) => {
  res.render("admin/categories/new");
});

router.post("/categories/save", (req, res) => {
  var title = req.body.title;
  if (title != undefined) {
    category
      .create({
        title: title,
        slug: slug(title),
      })
      .then(() => {
        res.redirect("/");
      });
  } else {
    res.redirect("/admin/categories/new");
  }
});

router.get("/admin/categories", (req, res) => {
  category.findAll().then((category) => {
    res.render("admin/categories/index", { category: category });
  });
});

router.post("/categories/delete", (req, res) => {
  var id = req.body.id;

  if (id != undefined) { //Indefinido
    if (!isNaN(id)) { //não e um número
        category.destroy({
            where: {
                id: id
            }
        }).then(() => {
            res.redirect("/admin/categories")
            
        }).catch(err => {
            console.log(err);
        })
    } else {
        res.redirect("/admin/categories")
    }
  } else {
    res.redirect("/admin/categories");
    console.log('id indefinido')
  }
});

module.exports = router;
