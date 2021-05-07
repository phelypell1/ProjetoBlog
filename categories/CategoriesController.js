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
        res.redirect("/admin/categories");
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

  if (id != undefined) {
    //Indefinido
    if (!isNaN(id)) {
      //não e um número
      category
        .destroy({
          where: {
            id: id,
          },
        })
        .then(() => {
          res.redirect("/admin/categories");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      res.redirect("/admin/categories");
    }
  } else {
    res.redirect("/admin/categories");
    console.log("id indefinido");
  }
});

router.get("/admin/categories/edit/:id", (req, res) => {
  var id = req.params.id;
  
  if (isNaN(id)){
    res.redirect("/admin/categories");
  }
    category
      .findByPk(id)
      .then((category) => {
        if (category != undefined) {
          res.render("admin/categories/edit", { category: category });
        } else {
          res.redirect("/admin/categories");
        }
      })
      .catch((err) => {
        res.redirect("/admin/categories");
      });
});


router.post('/admin/categories/update', (req, res) => {
  var id = req.body.id;
  var title = req.body.title;

  category.update(
    {
      title: title,
      slug: slug(title)
    },
    {
      where: {id: id}
    }).then(() =>{
      res.redirect("/admin/categories");
    })

})
module.exports = router;
