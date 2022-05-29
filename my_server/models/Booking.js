const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    price: { type: Number, required: true },
    bookingid: { type: Number, required: true },
    date: { type: Date, required: true },
    status: { type: String },
    payment: { type: String, required: true },
    price: { type: Number, required: true },
    guest_name: { type: String, required: true },
    numberofpeople: { type: Number, required: true },
    roomid: { type: String, required: true },
    roomname: { type: String, required: true },
    roomtype: { type: String },
    address: { type: String, required: true },
    checkin: { type: String, required: true },
    requires: { type: String },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Booking', BookingSchema);
