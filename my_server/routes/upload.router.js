const router = require('express').Router();
const multer = require('multer');

//Import model
const Upload = require('../models/Upload');

var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}--${file.originalname}`)
    }
})

let maxSize = 10 * 1024 * 1024 //10mb
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize
    }
}).single("file")

router.route('/')
    .get((req, res) => {
        res.json({ msg: "Get in upload router" })
    })

router.post('/upFile', (req, res) => {
    upload(req, res, async(err) => {
        if(err){
            res.json({message: err.message})
        }
        else{
            // console.log("File received: ", req.file.filename)

            let productInfo = new Upload({
                name: req.body.name,
                thumbPath: req.file.filename
            });
            await productInfo.save();
            res.json({message: "Success"})
        }
    })
})

router.get('/uploadedFile', async(req, res) => {
    try{
        let products = await Upload.find({});
        res.json(products);
    }catch(err){
        res.json({message: err.message})
    }
})

// router.get('/uploadedFile', function (req, res) {
//     Upload.find({}, function (err, data) {
//         if (err) {
//             res.json({ message: err.message })
//         }
//         else {
//             res.json(data)
//         }
//     })
// })

module.exports = router;