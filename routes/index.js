var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
/* GET home page. */
router.get('/', function(req, res, next) {
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

function validBand(band) {
  return typeof band.name == 'string' &&
          band.name.trim() != '' &&
          typeof band.genre == 'string' &&
          band.genre.trim() != '' &&
          typeof band.number_of_albums == 'number' &&
          typeof band.fav_song == 'string' &&
          band.fav_song.trim() != ''
}

router.post('/', function (req, res, next){
  if (validBand(req.body)) {
    knex('favband').insert({
        name: req.body.name,
        genre: req.body.genre,
        number_of_albums: req.body.number_of_albums,
        fav_song: req.body.fav_song
    }).returning('id').then(function (id){
        res.redirect('/bands/' + id);
    });
 } else {
   res.status(500)
   res.render('error',{
     message: 'not a valid band'
   })
 }
});

router.delete('/bands/:id', (req, res, next) =>{
  knex('favband').where('id', req.params.id).del().then((bands)=>{
    res.redirect('/')
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
  if (validBand(req.body)) {
    knex('favband').where('id', req.params.id).update({
        name: req.body.name,
        genre: req.body.genre,
        number_of_albums: req.body.number_of_albums,
        fav_song: req.body.fav_song
    }).returning('id').then((id)=>{
      console.log(id)
      res.redirect('/bands/' + id)
    })
  }
  else {
   res.status(500)
   res.render('error',{
     message: 'not a valid band'
   })
 }
})
module.exports = router;
