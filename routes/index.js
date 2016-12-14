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
router.get('/bands/:id', (req, res, next) =>{
  knex('favband')
  .where('id', req.params.id)
  .then(bands =>{
    res.render('view', {bands: bands})
  })
})

router.get('/new', (req, res, next)=>{
  res.render('new')
})

router.post('/bands', function (req, res, next){
   knex('favband').insert({
       name: req.body.name,
       genre: req.body.genre,
       number_of_albums: req.body.number_of_albums,
       fav_song: req.body.fav_song
   }).returning('id').then(function (id){
     console.log(id);
       res.redirect('/bands/' + id);
   });
});
router.delete('/bands/:id', (req, res, next) =>{
  knex('favband').where('id', req.params.id).del().then((bands)=>{
    res.redirect('/bands')
  })
})
router.get('/bands/edit/:id', (req, res, next) =>{
  knex('favband')
  .where('id', req.params.id)
  .then(bands =>{
    res.render('put', {bands: bands})
  })
})
router.put('/bands/edit/:id', (req, res) =>{
  knex('favband').where('id', req.params.id).update({
      name: req.body.name,
      genre: req.body.genre,
      number_of_albums: req.body.number_of_albums,
      fav_song: req.body.fav_song
  }).returning('id').then((id)=>{
    console.log(id)
    res.redirect('/bands/' + id)
  })
})
module.exports = router;
