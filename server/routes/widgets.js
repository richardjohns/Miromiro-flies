var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getWidgets()
    .then(widgets => {
      res.json(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', function (req, res) {
  db.saveWidget(req.body)
  // 4. consumes the API
    .then(() => res.sendStatus(201))
  // 6. returns positive status as a response to the API.
})

module.exports = router

var curry = {
  helloCurry: function (name) {
    this.greetDeeplyCurried("Hello")(", ")(name)
  },
  awkwardCurry: function (name) {
    this.greetDeeplyCurried('Hello')('...')('?')(name)
  },
  greetDeeplyCurried: function (greeting) {
    // var greeting = this.init.arguments[arguments.length - 1]
    return function (separator) {
      return function (emphasis) {
        return function (name) {
          console.log(greeting + separator + name + emphasis);
          // console.log('greeting: ' + greeting + ', separator: ' + separator + ', name: ' + name + ', emphasis: ' + emphasis)
        }
      }
    }
  }
};

// Pass in name.
curry.helloCurry('.')('Heidi');
curry.awkwardCurry('Heidi');

// var runApp = {
//   init: function () {
//     this.run()
//   },
//   run: function () {
//     alert("It's running!");
//   }
// };

// var greetDeeplyCurried = function (greeting) {
//   return function (separator) {
//     return function (emphasis) {
//       return function (name) {
//         console.log(greeting + separator + name + emphasis);
//       };
//     };
//   };
// };

// var greetAwkwardly = greetDeeplyCurried("Hello")("...")("?");
// greetAwkwardly("Heidi");

// var sayHello = greetDeeplyCurried("Hello")(", ");
// sayHello(".")("Heidi");

// var askHello = sayHello("?");
// askHello("Heidi");