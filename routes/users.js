var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* cool users route */

function coolrouter(req,res,next){
  res.send('users are cool!');
}

router.get('/cool/', coolrouter);

module.exports = router;
