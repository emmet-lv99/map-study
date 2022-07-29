var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "main" })
})

router.get("/upload", (req, res, next) => {
  res.render("upload", { title: "upload" })
})

module.exports = router
