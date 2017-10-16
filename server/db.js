
const path = require('path')
const config = require(path.join(__dirname, '/../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget,
  getUser: getUser,
  getUsers: getUsers,
  getBeers: getBeers,
  getUsersPerBeer: getUsersPerBeer,
  getBeersPerUser: getBeersPerUser,
  addBeers: addBeers
}

function getWidgets () {
  return knex('widgets').select()
}

function saveWidget (widget) {
  return knex('widgets')
  // 5. inserts widget with the fields provided.
    .insert({
      name: widget.name,
      price: widget.price,
      mfg: widget.mfg,
      inStock: widget.inStock
    })
    .then(id => {
      return (id[0])
    })
}

function getUsers() {
  return knex('users').select()
}

function getUser(id, connection) {
  return knex('users').where('id', id)
}

function getBeers() {
  console.log('This is connection: ', connection);
  return knex('beers').select()
}
// return connection('beers').select()

function getUsersPerBeer(id, connection) {
  return knex('beers')
    .join('usersbeers', 'beers.beer_id', 'usersbeers.beer_id')
    .join('users', 'usersbeers.user_id', 'users.id')
    .join('usersbeerscomments', 'usersbeerscomments.user_id', 'users.id')
    .select('users.name', 'users.id', 'usertriesbeer',
    'comment')
    .where('beers.beer_id', id)
    .andWhere('usertriesbeer', true)
    .andWhere('usersbeerscomments.beer_id', id)
}

function getBeersPerUser(id, connection) {
  return knex('users')
    .join('usersbeers', 'users.id', 'usersbeers.user_id')
    .join('beers', 'usersbeers.beer_id', 'beers.beer_id')
    .select('beers.beer_type', 'beers.beer_brand', 'beers.beer_image', 'beers.image', 'beers.beer_bio', 'usertriesbeer')
    .where('users.id', id)
    .andWhere('usertriesbeer', true)

}

function addBeers(beer, connection) {
  return knex('beers').insert(beer)
}

