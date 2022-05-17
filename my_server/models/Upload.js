const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
    name: {type: String, required: true},
    // file: {type: file, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Upload', UploadSchema);
