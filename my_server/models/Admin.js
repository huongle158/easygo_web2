const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

var AdminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: [4, 'Password must be at least 4 character'] },
    saltSecret: {type: String},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
})

AdminSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            if (err) throw err;
            this.password = hash;
            this.saltSecret = salt;
            next();
        })
    })
}) 


const Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
}

module.exports.getAdminById = function (id, callback) {
    Admin.findById(id, callback);
}

module.exports.getAdminByUsername = function (username, callback) {
    const query = { username: username }
    Admin.findOne(query, callback);
}

