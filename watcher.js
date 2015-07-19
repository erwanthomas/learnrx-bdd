'use strict';

var watch = require('watch');
var md2js = require('./utils/md2js');

var opts = {
  filter: function (f) {
    return f.match(/\.md$/);
  }
};

function watcher(f, curr, prev) {
  if (curr && curr.nlink > 0) {
    console.log('%d lines of javascript written.', md2js.convert(f));
  }
}

watch.watchTree('./exercises/local', opts, watcher);
