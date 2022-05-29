const router = require('express').Router();

//Import model
const Booking = require('../models/Booking');

router.route('/')
  .get((req, res) => {
    res.json({ msg: "Get in booking router" })
  })

router.get('/booking', function (req, res) {
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
router.post("/booking", async function(req,res){
  let booking = new Booking({
      name: req.body.name,
      price: req.body.price
  })
  try{
      p = await booking.save();
      res.json({message:"success"})
  }
  catch(err){
      res.json({message: err.message})
  }
  
})

module.exports = router;