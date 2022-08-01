var express = require("express")
var router = express.Router()
const locationModel = require("../model/location")

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "main" })
})

router.get("/upload", (req, res, next) => {
  res.render("upload", { title: "upload" })
})

router.post("/location", (req, res, next) => {
  const { title, address, lat, lng } = req.body
  let location = new locationModel()
  location.title = title
  location.address = address
  location.lat = lat
  location.lng = lng
  location
    .save()
    .then((result) => {
      console.log(result)
      res.json({
        message: "success",
      })
    })
    .catch((error) => {
      console.log(error)
      res.json({ message: "error" })
    })
})

module.exports = router
