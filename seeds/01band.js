exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE favband; ALTER SEQUENCE favband_id_seq restart with 11;')
    .then(function () {
      const favbands = [{
        id: 1,
        name: 'Real Friends',
        number_of_albums: 3,
        fav_song: 'Summer',
        genre: 'Pop-punk'

      },{
        id: 2,
        name: 'A Day to Remember',
        number_of_albums: 8,
        fav_song: 'Out of Time',
        genre: 'Pop-punk'
      },{
        id: 3,
        name: 'Make Them Suffer',
        number_of_albums: 3,
        fav_song: 'Widower',
        genre: 'Deathcore'
      },{
        id: 4,
        name: 'After The Burial',
        number_of_albums: 6,
        fav_song: 'Lost in the Static',
        genre: 'Djent'
      },{
        id: 5,
        name: 'Chunk! No, Capitan Chunk!',
        number_of_albums: 3,
        fav_song: 'Insanity',
        genre: 'Metalcore'
      },{
        id: 6,
        name: 'Panic! At The Disco',
        number_of_albums: 4,
        fav_song: 'Impossible Year',
        genre: 'Alt-rock'
      },{
        id: 7,
        name: 'Rings of Saturn',
        number_of_albums: 3,
        fav_song: 'Seized and Devoured 2.0',
        genre: 'Tech-Death'
      },{
        id: 8,
        name: 'Beartooth',
        number_of_albums: 3,
        fav_song: 'Burnout',
        genre: 'Post Hardcore'
      },{
        id: 9,
        name: 'Twenty One Pilots',
        number_of_albums: 3,
        fav_song: 'Isle of Flightless Birds',
        genre: 'Rock'
      },{
        id: 10,
        name: 'Chelsea Grin',
        number_of_albums: 6,
        fav_song: 'Recreant',
        genre: 'Deathcore'
      }
    ]

      return knex('favband').insert(favbands);
    });
};
