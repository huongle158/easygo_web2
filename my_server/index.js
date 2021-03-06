const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const passport = require('passport')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'images')));

const morgan = require('morgan')
app.use(morgan('combined'))

const cors = require('cors')
app.use(cors())

//Connect DB
const db = require('./config/db');
db.connect();

//API upload file
const uploadRouter = require('./routes/upload.router');
app.use("/upload", uploadRouter);

// app.get('/', (req, res) => {
//   res.json({msg: "Welcome to my easygo!!"})
// })

//Import Hotel Routes
const hotelRouter = require('./routes/hotel.router')
app.use("/hotel", hotelRouter)

//Admin Route
const admin = require('./routes/admin.router')
app.use('/admin', admin)

//Booking Route
const booking = require('./routes/booking.router')
app.use('/booking', booking)

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//Error handler
app.use((err, req, res, next) => {
  if (err.name == 'ValidationError') {
    var valErrors = [];
    Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
    return res.status(422).send(valErrors);
    
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
