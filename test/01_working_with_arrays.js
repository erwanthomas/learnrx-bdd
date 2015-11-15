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

function exists(value) {
  return (typeof value) !== 'undefined';
}

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike);
}

function pick() {
  var obj, args, result;

  result = {};
  args = toArray(arguments);
  obj = args.shift();

  if (!exists(obj) || obj === null) {
    return result;
  }

  args.forEach(function (prop) {
    if (exists(obj[prop])) {
      result[prop] = obj[prop];
    }
  });

  return result;
}

function fetchTestData(id) {
  var input = data(id);
  var inputs = pick(input, 'thisArg', 'args');

  return {
    exercise: exercises(id),
    solution: solutions(id),
    thisArg: inputs.thisArg || null,
    args: inputs.args || [ input ]
  };
}

function deepEqualTest(id) {
  return function () {
    var t = fetchTestData(id);

    var obtained = t.exercise.apply(t.thisArg, t.args);
    var expected = t.solution.apply(t.thisArg, t.args);

    expect(obtained).to.deep.equal(expected);
  };
}

function extend(obj, propName, prop, unsafe) {
  var noop = false;
  var oldProp;

  if (unsafe) {
    oldProp = obj[propName];
  }

  if (!unsafe && exists(obj[propName])) {
    noop = true;
  } else {
    obj[propName] = prop;
  }

  return function () {
    var isDeleted;

    if (noop) {
      return;
    }

    if (unsafe) {
      obj[propName] = oldProp;
      return;
    }

    try {
      isDeleted = (delete obj[propName]);
    } finally {
      if (!isDeleted) {
        obj[propName] = undefined;
      }
    }
  };
}

function extendArrays() {
  return [
    extend(Array.prototype, 'concatAll', solutions('010')),
    extend(Array.prototype, 'concatMap', solutions('013')),
    extend(Array.prototype, 'reduce', solutions('016'), true),
    extend(Array, 'zip', solutions('022')),
  ];
}

function invokeAll(funcArray) {
  funcArray.forEach(function (func) { func(); });
}

function extendArraysAndCall(test) {
  return function () {
    var cleaners = extendArrays(); test(); invokeAll(cleaners);
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
    it('should implement `map`', deepEqualTest('004'));
  });

  describe('Exercise 5', function () {
    it('should use `map` to project an array of videos into an array of { id, title } pairs', deepEqualTest('005'));
  });

  describe('Exercise 6', function () {
    it('should use `forEach` to collect only those videos with a rating of 5.0', deepEqualTest('006'));
  });

  describe('Exercise 7', function () {
    it('should implement `filter`', deepEqualTest('007'));
  });

  describe('Exercise 8', function () {
    it('should chain `filter` and `map` to collect the ids of videos that have a rating of 5.0', deepEqualTest('008'));
  });

  describe('Exercise 9', function () {
    it('should flatten the `movieLists` array into an array of video ids', deepEqualTest('009'));
  });

  describe('Exercise 10', function () {
    it('should implement `concatAll`', deepEqualTest('010'));
  });

  describe('Exercise 11', function () {
    it('should use `map` and `concatAll` to flatten `movieLists` into an array of video ids', extendArraysAndCall(deepEqualTest('011')));
  });

  describe('Exercise 12', function () {
    it('should retrieve id, title, and a 150x200 box art url for every video', extendArraysAndCall(deepEqualTest('012')));
  });

  describe('Exercise 13', function () {
    it('should implement `concatMap`', extendArraysAndCall(deepEqualTest('013')));
  });

  describe('Exercise 14', function () {
    it('should retrieve id, title, and a 150x200 box art url for every video', extendArraysAndCall(deepEqualTest('014')));
  });

  describe('Exercise 15', function () {
    it('should use `forEach` to find the largest box art', deepEqualTest('015'));
  });

  describe('Exercise 16', function () {
    it('should implement `reduce`', deepEqualTest('016'));
  });

  describe('Exercise 17', function () {
    it('should retrieve the largest rating', deepEqualTest('017'));
  });

  describe('Exercise 18', function () {
    it('should retrieve the url of the largest box art', extendArraysAndCall(deepEqualTest('018')));
  });

  describe('Exercise 19', function () {
    it('should reduce using an initial value', extendArraysAndCall(deepEqualTest('019')));
  });

  describe('Exercise 20', function () {
    it('should retrieve { id, title, smallest box art url } for every video', extendArraysAndCall(deepEqualTest('020')));
  });

  describe('Exercise 21', function () {
    it('should combine videos and bookmarks by index', extendArraysAndCall(deepEqualTest('021')));
  });

  describe('Exercise 22', function () {
    it('should implement `zip`', extendArraysAndCall(deepEqualTest('022')));
  });

  describe('Exercise 23', function () {
    it('should combine videos and bookmarks by index', extendArraysAndCall(deepEqualTest('023')));
  });

  describe('Exercise 24', function () {
    it('should retrieve { id, title, middle interesting time, smallest box art url } for every video', extendArraysAndCall(deepEqualTest('024')));
  });

  describe('Exercise 25', function () {
    it('should convert from arrays to trees', deepEqualTest('025'));
  });

  describe('Exercise 26', function () {
    it('should convert from arrays to deeper trees', extendArraysAndCall(deepEqualTest('026')));
  });
});
