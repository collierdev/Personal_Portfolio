var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile('/Personal_Portfolio/server/Resume.pdf', 'Resume.pdf');
});

module.exports = router;