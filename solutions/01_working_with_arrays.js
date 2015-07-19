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

function sol003(newReleases) {
  var videoAndTitlePairs = [];

  newReleases.forEach(function (video) {
    videoAndTitlePairs.push({
      id: video.id,
      title: video.title
    });
  });

  return videoAndTitlePairs;
};

function sol004(projectionFunction) {
  var results = [];

  this.forEach(function (item) {
    results.push(projectionFunction(item));
  });

  return results;
}

module.exports = {
  '001': sol001,
  '002': sol002,
  '003': sol003,
  '004': sol004
};
