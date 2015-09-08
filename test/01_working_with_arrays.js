var expect    = require('chai').expect;
var data      = require('../data/all');
var solutions = require('../solutions/all');
var exercises = require('../exercises/all');
var Pconsole  = require('../utils/pconsole');

function consoleTest(id) {
  return function () {
    var pconsole = new Pconsole();

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

function callAsMethod(id) {
  return function () {
    var d = data(id);
    var solution = solutions(id).call(d.array, d.func);
    var exercise = exercises(id).call(d.array, d.func);

    expect(exercise).to.deep.equal(solution);
  }
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
    it('should implement `map`', callAsMethod('004'));
  });

  describe('Exercise 5', function () {
    it('should use `map` to project an array of videos into an array of { id, title } pairs', deepEqualTest('005'));
  });

  describe('Exercise 6', function () {
    it('should use `forEach` to collect only those videos with a rating of 5.0', deepEqualTest('006'));
  });

  describe('Exercise 7', function () {
    it('should implement `filter`', callAsMethod('007'));
  });
});
