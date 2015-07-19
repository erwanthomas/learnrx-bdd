'use strict';

var fs = require('fs');
var _  = require('lodash');

function rmDotMD(filename) {
  return filename.replace(/\.md$/, '');
}

function readMDLines(filename) {
  return fs.readFileSync(rmDotMD(filename) + '.md', 'utf8').split('\n');
}

function writeJSLines(filename, content) {
  fs.writeFileSync(rmDotMD(filename) + '.js', content.join('\n'));
  return content.length;
}

function isJSBlockBeginning(string) {
  return string === '```javascript';
}

function isJSBlockEnding(string) {
  return string === '```';
}

function indexesOf(arr, predicates) {
  var l1 = arr.length;
  var l2 = predicates.length;
  var i, j;

  var results = [];

  for (i = 0; i < l1; i += 1) {
    for (j = 0; j < l2; j += 1) {
      if (!results[j]) {
        results[j] = [];
      }

      if (predicates[j](arr[i])) {
        results[j].push(i);
      }
    }
  }

  return results;
}

function zipMatch(beginnings, endings) {
  var begCount = beginnings.length;
  var endCount = endings.length;
  var matchMemo;

  if (begCount > endCount) {
    throw new Error('Inconsistant JS blocks');
  }

  if (begCount < endCount) {
    matchMemo = Object.create(null);

    beginnings.forEach(function (beginning) {
      var ending, i;

      for (i = 0; i < endCount; i += 1) {
        ending = endings[i];

        if (beginning < ending) {
          matchMemo[ending] = true;
          break;
        }
      }
    });

    endings = endings.filter(function (ending) {
      return matchMemo[ending];
    });
  }

  return _.zip(beginnings, endings);
}

function parse(lines) {
  var marks = indexesOf(lines, [
    isJSBlockBeginning,
    isJSBlockEnding
  ]);

  var beginnings = marks[0];
  var endings    = marks[1];

  var blocks = zipMatch(beginnings, endings);

  blocks = blocks.map(function (block) {
    var start = block[0] + 1;
    var end   = block[1] - 1;
    return _.at(lines, _.range(start, end + 1));
  });

  return _.flatten(blocks);
}

function convert(filename) {
  return writeJSLines(filename, parse(readMDLines(filename)));
};

module.exports = {
  convert: convert,
  read: readMDLines,
  write: writeJSLines,
  parse: parse
};
