var express = require('express');
var router = express.Router();
let FormEntry = require('../models/formEntry.model');
var data = {
    name : 'name',
    email : 'email',
    message : 'message',
}

router.get('/', function(req, res, next) {
    res.send(data);
});
router.post('/', function (req, res) {
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
  })

module.exports = router;