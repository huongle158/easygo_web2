const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    roomid: { type: String, required: true },
    available: { type: String, required: true},
    image: {type: Array, requires: true},
    rating: {type: Object},
    city: { type: String},
    place: {type: Object},
    type: {type: String},
    numberofpeople: {type: Number, required: true},
    bed: {type: Number},
    bathroom: {type: Number},
    characteristic: {type: Array, required: true},
    description: {type: String, required: true},
    convenient: {type: Array},
    rule: {type: Array, required: true},
    safety: {type: Array, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Hotel', HotelSchema);
