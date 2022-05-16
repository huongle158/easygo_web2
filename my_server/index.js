const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

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

//Import Routes
const hotelRouter = require('./routes/hotel.router')
app.use("/", hotelRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
