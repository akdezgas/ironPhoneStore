var express = require('express');
var router = express.Router();
var Phone = require ('../models/Phone.js')

/* GET home page. */
router.get('/all', function(req, res, next) {
    Phone.find()
        .then(telefonos => res.json(telefonos))
});


router.post('/new', function(req, res, next) {
    const phone = new Phone({
        name:req.body.name,
        brand:req.body.brand,
        specs:req.body.specs,
        image:req.body.image
    })
    phone.save()
        .then(phoneCreated => res.json(phoneCreated))
})

router.get('/:id', function(req, res, next) {
    Phone.findById(req.params.id)
        .then(singlePhone => res.json(singlePhone))
})


module.exports = router;
