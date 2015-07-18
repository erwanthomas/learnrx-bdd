'use strict';

var assign = require('lodash/object/assign');

function addPath(filename) {
  return './' + filename;
};

var chapters = [
  '01_working_with_arrays'
];

var all = chapters
  .map(addPath)
  .map(require)
  .reduce(assign, {});

module.exports = function (id) {
  return all[id];
};
