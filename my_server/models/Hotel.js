const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HotelSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    roomid: { type: String, required: true },
    available: { type: Boolean, required: true },
    // image: {type: Mixed, requires: true},
    rating: {type: Object, required: true},
    city: { type: String, required: true },
    place: {type: Object, required: true},
    type: {type: String, required: true},
    numberofpeople: {type: Number, required: true},
    bed: {type: Number, required: true},
    bathroom: {type: Number, required: true},
    characteristic: {type: Array, required: true},
    description: {type: String, required: true},
    convenient: {type: Array, required: true},
    rule: {type: Array, required: true},
    safety: {type: Array, required: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Hotel', HotelSchema);
