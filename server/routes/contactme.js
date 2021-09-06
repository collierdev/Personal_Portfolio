var express = require('express');
var router = express.Router();
let FormEntry = require('../models/formEntry.model');

const { check, validationResult } = require('express-validator');
var formValidate = [
    // Check name
    check('name').isLength({ min: 1, max:60 }).withMessage('Must Be at Least 1-60 Characters').not().isEmpty().trim().escape(),
    // Check email
    check('email', 'Must be an Email address').not().isEmpty().isEmail().trim().escape().normalizeEmail(),
    // Check message
    check('message').isLength({ min: 10, max:250 }).withMessage('Must Be at Least 10-250 Characters').not().isEmpty().trim().escape(),
];


var data = {
    name : 'name',
    email : 'email',
    message : 'message',
}

router.get('/', function(req, res, next) {
    res.send(data);
});


router.post('/', formValidate, function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    else{
    const formData = req.body;
    data = formData;
    console.log(data);
    let formEntry = new FormEntry(data);
    formEntry.save()
        .then(formEntry => {
            res.status(200).json({'formEntry': 'Form entry added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new form failed');
        });
    }
  })

module.exports = router;