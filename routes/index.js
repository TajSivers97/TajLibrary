var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
}); 

/* Index route */
function indexroute(req,res,next){
  res.send('This is an index route..');
}

router.get('/indexroute/', indexroute);
module.exports = router;
