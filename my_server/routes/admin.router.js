const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken')
const config = require('../config/db/index')
const Admin = require('../models/Admin')

//Register
router.post('/register', (req, res, next) => {
    var newAdmin = new Admin({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });

    newAdmin.save((err, doc) => {
        if (!err) {
            return res.send(doc);
            // res.json({ success: true, msg: 'User registered' })
        }
        else {
            if (err.code == 11000) {
               return res.send(['Dupicate username found']);
            }
            else
                return next(err);
        }
    })

    // Admin.addAdmin(newAdmin, (err, admin) => {
    //     if (!err) {
    //         res.send(admin);
    //         res.json({ success: true, msg: 'User registered' })
    //     }
    //     else {
    //         if (err.code == 11000) {
    //             res.send(['Dupicate username found']);
    //         }
    //         else
    //             return next(err);
    //     }
    // })
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.getAdminByUsername(username, (err, admin) => {
        if (err) throw err;
        if (!admin) {
            return res.json({ success: false, msg: 'Admin not found' })
        }

        Admin.comparePassword(password, admin.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(admin.toJSON(), config.secretOrKey, {
                    expiresIn: 604800 // 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    admin: {
                        id: admin._id,
                        name: admin.name,
                        username: admin.username,
                        email: admin.email
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong password' })

            }
        })
    })
});

// Dashboard
router.get('/dashboard', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    Admin.find({}, (err, result) => {
        res.status(200).json({
            data: result
        }
        )
    })
});


module.exports = router