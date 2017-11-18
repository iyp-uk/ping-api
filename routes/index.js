var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Go check the ping endpoint.')
});

module.exports = router;
