const router = require('express').Router();

//Import model
const Hotel = require('../models/Hotel');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: "images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`)
  }
})

let maxSize = 10 * 1024 * 1024 //10mb
var upload = multer({
  storage: storage,
  limits: {
    fileSize: maxSize
  }
}).single("file")

//Get all hotels
router.get('/', function (req, res) {
  Hotel.find({}, function (err, data) {
    if (err) {
      res.json({ message: err.message })
    }
    else {
      res.json(data)
    }
  })
})

//Get list of hotels in same city
router.get('/city/:city', function (req, res) {
  var cityReq = req.params.city
  Hotel.find({ city: cityReq }, function (err, data) {
    if (err) {
      res.json({ message: err.message })
    }
    else {
      res.json(data);
    }
  })

})

// Get Hotel by Id
router.get('/:id', function (req, res) {
  console.log(req.params.id);
  Hotel.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        hotel: result
      })
    })
    .catch(err => console.log(err))
})

//Insert new hotel
router.post("/", (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      res.json({ message: err.message })
    }
    else {
      let hotel = new Hotel({
        name: req.body.name,
        price: req.body.price,
        roomid: req.body.roomid,
        available: req.body.available,
        // image: req.file.filename,
        rating: req.body.rating,
        city: req.body.city,
        place: req.body.place,
        type: req.body.type,
        numberofpeople: req.body.numberofpeople,
        bed: req.body.bed,
        bathroom: req.body.bathroom,
        characteristic: req.body.characteristic,
        description: req.body.description,
        convenient: req.body.convenient,
        rule: req.body.rule,
        safety: req.body.safety

      });
      await hotel.save();
      res.json({ message: "success" })

    }
  })
})

//Delete Hotel
router.delete('/:id', async (req, res) => {
  try {
    await Hotel.remove({ _id: req.params.id })
    res.json({ status: 'success' });
  }
  catch (err) {
    res.json({ message: err.message })
  }
})

//Update Hotel
router.patch('/:id', async (req, res) => {
  try {
    await Hotel.updateOne({ _id: req.params.id }, {
      $set: { 
        name: req.body.name,
        price: req.body.price,
        roomid: req.body.roomid,
        available: req.body.available,
        // image: req.file.filename,
        rating: req.body.rating,
        city: req.body.city,
        place: req.body.place,
        type: req.body.type,
        numberofpeople: req.body.numberofpeople,
        bed: req.body.bed,
        bathroom: req.body.bathroom,
        characteristic: req.body.characteristic,
        description: req.body.description,
        convenient: req.body.convenient,
        rule: req.body.rule,
        safety: req.body.safety
       }
    })
    res.json({ status: 'success' });
  } catch (err) {
    res.json({ msg: err.message })
  }
})


module.exports = router;