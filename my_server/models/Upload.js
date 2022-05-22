const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
    name: {type: String, required: true},
    thumbPath: {type: String, required: true}
})

module.exports = mongoose.model('Upload', UploadSchema);
