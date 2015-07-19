var expect    = require('chai').expect;
var data      = require('../data/all');
var solutions = require('../solutions/all');
var exercises = require('../exercises/all');

function consoleTest(id) {
  return function () {
    var pconsole = require('../utils/pconsole.js').create();

    function invoke(func, console, names) {
      func(console, names);
      return console.clear();
    }

    var solution = invoke(solutions(id), pconsole, data(id));
    var exercise = invoke(exercises(id), pconsole, data(id));

    expect(exercise).to.deep.equal(solution);
  };
}

function deepEqualTest(id) {
  return function () {
    var solution = solutions(id)(data(id));
    var exercise = exercises(id)(data(id));

    expect(exercise).to.deep.equal(solution);
  };
}

describe('Working with arrays:', function () {

  describe('Exercise 1', function () {
    it('should print all the names in an array', consoleTest('001'));
  });

  describe('Exercise 2', function () {
    it('should print all the names in an array', consoleTest('002'));
  });

  describe('Exercise 3', function () {
    it('should project an array of videos into an array of { id, title } pairs', deepEqualTest('003'));
  });

  describe('Exercise 4', function () {
    it('should implement map()', function () {
      var array = [1,2,3,4,5];
      var projection = function (item) { return item * 10 };

      var solution = solutions('004').call(array, projection);
      var exercise = exercises('004').call(array, projection);

      expect(exercise).to.deep.equal(solution);
    });
  });

});
