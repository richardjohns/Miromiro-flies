
const path = require('path')
const config = require(path.join(__dirname, '/../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getWidgets,
  saveWidget
}

// var widgets = [{
//   id: 1,
//   name: 'Red widget',
//   price: 23.45,
//   mfg: 'Acme Inc.',
//   inStock: 4
// }, {
//   id: 2,
//   name: 'Blue widget',
//   price: 423.47,
//   mfg: 'Acme Inc.',
//   inStock: 8
// }, {
//   id: 3,
//   name: 'Yellow widget',
//   price: 123.40,
//   mfg: 'Acme Inc.',
//   inStock: 3
// }]

function getWidgets () {
  return knex('widgets').select()
}

function saveWidget (widget) {
  return knex('widgets')
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
