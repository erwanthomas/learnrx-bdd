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

function sol008(newReleases) {
  return newReleases
    .filter(function (video) {
      return video.rating === 5.0;
    })
    .map(function (video) {
      return video.id;
    });
}

function sol009(movieLists) {
  var allVideoIdsInMovieLists = [];

  movieLists.forEach(function (movieList) {
    movieList.videos.forEach(function (video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  return allVideoIdsInMovieLists;
}

function sol010() {
  var results = [];

  this.forEach(function (subArray) {
    results.push.apply(results, subArray);
  });

  return results;
}

function sol011(movieLists) {
  return movieLists
    .map(function (movieList) {
      return movieList.videos
        .map(function (video) {
          return video.id;
        });
    })
    .concatAll();
}

function sol012(movieLists) {
  return movieLists
    .map(function (movieList) {
      return movieList.videos
        .map(function (video) {
          return video.boxarts
            .filter(function (boxart) {
              return boxart.width === 150 && boxart.height === 200;
            })
            .map(function (boxart) {
              return {
                id: video.id,
                title: video.title,
                boxart: boxart.url
              };
            });
        })
        .concatAll();
    })
    .concatAll();
}

function sol013(projection) {
  return this
    .map(function (item) {
      return projection(item);
    })
    .concatAll();
}

function sol014(movieLists) {
  return movieLists
    .concatMap(function (movieList) {
      return movieList.videos
        .concatMap(function (video) {
          return video.boxarts
            .filter(function (boxart) {
              return boxart.width === 150 && boxart.height === 200;
            })
            .map(function (boxart) {
              return {
                id: video.id,
                title: video.title,
                boxart: boxart.url
              };
            });
        });
    });
}

module.exports = {
  '001': sol001,
  '002': sol002,
  '003': sol003,
  '004': sol004,
  '005': sol005,
  '006': sol006,
  '007': sol007,
  '008': sol008,
  '009': sol009,
  '010': sol010,
  '011': sol011,
  '012': sol012,
  '013': sol013,
  '014': sol014,
};
