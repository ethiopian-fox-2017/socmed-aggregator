var express = require('express');
var router = express.Router();
var controller = require('../controllers/twatt')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.send('Welcome');
// });

var OAuth = require('oauth');

router.get('/tweet/search', controller.searchTweet)

router.get('/tweet/recent', controller.getTweet)

router.post('/tweet/new', controller.newTweet)

module.exports = router;
