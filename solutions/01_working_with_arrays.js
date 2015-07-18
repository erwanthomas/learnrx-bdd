'use strict';

function sol001(console, names) {
  var counter;
  var namesLength = names.length;

  for (counter = 0; counter < namesLength; counter += 1) {
    console.log(names[counter]);
  }
}

function sol002(console, names) {
  names.forEach(function (name) {
    console.log(name);
  });
}

module.exports = {
  '001': sol001,
  '002': sol002,
};
