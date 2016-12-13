var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* GET home page. */
router.get('/bands', function(req, res, next) {
  return knex('favband')
  // .then(data => {
  //   res.json(data)
  // })
  .then(bands =>{
    res.render('index', {bands: bands})
  })
});
router.post('/', (req, res)=>{
  knex('favband').insert(req.body).returning('id').then((id)=>{
    res.redirect('/' + id)
  })
})

module.exports = router;
