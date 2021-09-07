var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
router.get('/', async function(req, res) {
try{
    const fileName = 'Resume.pdf';
    console.log(fileName);
    const fileURL = path.join(__dirname, '..', 'public', 'Resume.pdf');
    console.log(fileURL);
      res.sendFile(fileURL);

} catch (e){
    console.log(e);
    res.status(500).end;
}
});

module.exports = router;