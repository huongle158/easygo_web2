const mongoose = require('mongoose');
require('dotenv/config')

async function connect(){
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connect Successfully!")
    }
    catch(error){
        console.log("Error: ", error.message)
    }
}


module.exports = { connect }