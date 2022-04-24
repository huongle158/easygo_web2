const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    // rating: {type: Any, required: true},
    // place: {type: Number, required: true},
    // type: {type: String, required: true},
    // numberofpeople: {type: Number, required: true},
    // bed: {type: Number, required: true},
    // bathroom: {type: Number, required: true},
    // characteristic: {type: Any, required: true},
    // description: {type: String, required: true},
    // safety: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Hotel', HotelSchema);
