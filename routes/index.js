var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.get('/insert', function(req, res, next) {
//   res.render('respond with a insert', { title: 'Expres112s' });
// });

module.exports = router;

