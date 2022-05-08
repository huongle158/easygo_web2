const router = require('express').Router();

//Import model
const Hotel = require('../models/Hotel');

router.route('/')
  .get((req, res) => {
    res.json({ msg: "Get in router" })
  })

router.get('/hotel', function (req, res) {
  Hotel.find({}, function (err, data) {
    if (err) {
      res.json({ message: err.message })
    }
    else {
      res.json(data)
    }
  })
})

module.exports = router;