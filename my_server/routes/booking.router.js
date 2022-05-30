const router = require('express').Router();

//Import model
const Booking = require('../models/Booking');


router.get('/', function (req, res) {
  Booking.find({}, function (err, data) {
    if (err) {
      res.json({ message: err.message })
    }
    else {
      res.json(data)
    }
  })
})

//Insert new booking
router.post("/", async function (req, res) {
  let booking = new Booking({
    bookingid: req.body.bookingid,
    date: req.body.date,
    status: req.body.status,
    payment: req.body.payment,
    price: req.body.price,
    guest_name: req.body.guest_name,
    numberofpeople: req.body.numberofpeople,
    roomid: req.body.roomid,
    roomname: req.body.roomname,
    address: req.body.address,
    checkin: req.body.checkin,
    requires: req.body.requires,
    phone: req.body.phone,
    email: req.body.email

  })
  try {
    p = await booking.save();
    res.json({ message: "success" })
  }
  catch (err) {
    res.json({ message: err.message })
  }

})

module.exports = router;