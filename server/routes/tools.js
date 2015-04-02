var router = require('express').Router();

router.route('/tools').get(function(request,response) {
  response.json([
    {'name': 'Mocha', 'url': 'http://mochajs.org'},
    {'name': 'Chai', 'url': 'http://chaijs.com'}
  ]);
});

module.exports = router;
