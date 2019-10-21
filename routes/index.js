var express = require('express');
var router = express.Router();


router.get("/", (req, res, next) => {
  res.status(200)
      .render("template", {
          locals: {
              title: "Welcome to the  Index"
          },
          partials: {
              
          }
          }
      )
})

module.exports = router;
