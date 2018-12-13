// Greeter.js


/*
//var config = require('./config.json');
module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = "Hi there and greetings!";
	greet.textContent = config.iuap;
	return greet;
};
*/




var config = require('../json/myjson.json');

module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = config.iuap;
  return greet;
};
