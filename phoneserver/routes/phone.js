var express = require('express');
var router = express.Router();
var Phone = require ('../models/Phone.js');

var multer  = require('multer');
var upload = multer({ dest: './public/uploads/' });


/* GET home page. */
router.get('/all', function(req, res, next) {
    Phone.find()
        .then(telefonos => res.json(telefonos))
});


router.post('/new', upload.single("file"), function(req, res, next) {
    console.log("entro aqui!!")
    const phone = new Phone({
        name:req.body.name,
        brand:req.body.brand,
        specs:req.body.specs,
        image: `/uploads/${req.file.filename}`
    })
    phone.save()
        .then(phoneCreated => res.json(phoneCreated))
})

router.get('/:id', function(req, res, next) {
    Phone.findById(req.params.id)
        .then(singlePhone => res.json(singlePhone))
})


module.exports = router;
