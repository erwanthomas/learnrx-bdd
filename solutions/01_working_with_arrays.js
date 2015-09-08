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

function sol005(newReleases) {
  return newReleases.map(function (video) {
    return { id: video.id, title: video.title };
  });
}

function sol006(newReleases) {
  var videos = [];

  newReleases.forEach(function (video) {
    if (video.rating === 5.0) {
      videos.push(video);
    }
  });

  return videos;
}

function sol007(predicateFunction) {
  var results = [];

  this.forEach(function (itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });

  return results;
}

module.exports = {
  '001': sol001,
  '002': sol002,
  '003': sol003,
  '004': sol004,
  '005': sol005,
  '006': sol006,
  '007': sol007,
};
