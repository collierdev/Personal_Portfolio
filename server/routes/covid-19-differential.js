var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/readme', function(req, res,next) {
    try{
        const fileName = 'G69230.html';
        console.log(fileName);
        const fileURL = path.join(__dirname, '..', 'public', 'readme.html');
        console.log(fileURL);
          res.sendFile(fileURL);
    
    } catch (e){
        console.log(e);
        res.status(500).end;
    }
});

module.exports = router;
