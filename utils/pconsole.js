'use strict';

function Pconsole() {
  this.entries = [];
}

Pconsole.create = function () {
  return new Pconsole;
};

Pconsole.prototype.log = function (item) {
  this.entries.push(item);
};

Pconsole.prototype.clear = function () {
  var output = this.entries;
  this.entries = [];
  return output;
};

module.exports = Pconsole;
