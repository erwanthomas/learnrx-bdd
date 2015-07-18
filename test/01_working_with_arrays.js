var expect    = require('chai').expect;
var solutions = require('../solutions/all');
var exercises = require('../exercises/all');

describe('Working with arrays:', function () {

  describe('Exercise 1', function () {
    it('should print all the names in an array', function () {
      var pconsole = require('../utils/pconsole.js').create();
      var names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'];

      function invoke(func, console, names) {
        func(console, names);
        return console.clear();
      }

      var solution = invoke.bind(null, solutions('001'), pconsole, names);
      var exercise = invoke.bind(null, exercises('001'), pconsole, names);

      expect(exercise()).to.deep.equal(solution());
    });
  });

});
