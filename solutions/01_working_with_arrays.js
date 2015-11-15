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

function sol015(boxarts) {
  var currentSize, maxSize, largestBoxart;

  maxSize = -1;

  boxarts.forEach(function (boxart) {
    currentSize = boxart.width * boxart.height;
    if (currentSize > maxSize) {
      largestBoxart = boxart;
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}

function sol016(combiner, initialValue) {
  var counter, accumulatedValue;

  if (this.length === 0) {
    return this;
  }

  switch (arguments.length) {
    case 0: throw new TypeError('Invalid arguments for Array#reduce');
    case 1:  counter = 1; accumulatedValue = this[0]; break;
    default: counter = 0; accumulatedValue = initialValue;
  }

  for (; counter < this.length; counter += 1) {
    accumulatedValue = combiner(accumulatedValue, this[counter]);
  }

  return [accumulatedValue];
}

function sol017(ratings) {
  return ratings.reduce(function (acc, cur) {
    return acc > cur ? acc : cur;
  });
}

function sol018(boxarts) {
  return boxarts
    .reduce(function (acc, cur) {
      return (acc.width * acc.height) > (cur.width * cur.height) ? acc : cur;
    })
    .map(function (boxart) {
      return boxart.url;
    });
}

function sol019(videos) {
  return videos
    .reduce(function (accumulatedMap, video) {
      accumulatedMap[video.id] = video.title;
      return accumulatedMap;
    }, {});
}

function sol020(movieLists) {
  // helper (optional)
  function size(boxart) {
    return boxart.width * boxart.height;
  }

  return movieLists.concatMap(function (movieList) {
    return movieList.videos.concatMap(function (video) {
      return video.boxarts
        .reduce(function (smallestBoxart, boxart) {
          return size(smallestBoxart) < size(boxart) ? smallestBoxart : boxart;
        })
        .map(function (boxart) {
          return { id: video.id, title: video.title, boxart: boxart.url };
        });
    });
  });
}

function sol021(videos, bookmarks) {
  var counter, pairsLength;

  var videoIdAndBookmarkIdPairs = [];

  counter = 0;
  pairsLength = Math.min(videos.length, bookmarks.length);

  for (; counter < pairsLength; counter += 1) {
    videoIdAndBookmarkIdPairs.push({
      videoId: videos[counter].id,
      bookmarkId: bookmarks[counter].id,
    });
  }

  return videoIdAndBookmarkIdPairs;
}

function sol022(left, right, combinerFunction) {
  var results = [];
  var counter = 0;
  var zipLength = Math.min(left.length, right.length);

  for (; counter < zipLength; counter += 1) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
}

function sol023(videos, bookmarks) {
  return Array.zip(videos, bookmarks, function (video, bookmark) {
    return { videoId: video.id, bookmarkId: bookmark.id };
  });
}

function sol024(movieLists) {
  function size(boxart) {
    return boxart.width * boxart.height;
  }

  return movieLists.concatMap(function (movieList) {
    return movieList.videos.concatMap(function (video) {
      return Array.zip(
        video.boxarts.reduce(function (prev, cur) {
          return size(prev) < size(cur) ? prev : cur;
        }),
        video.interestingMoments.filter(function (moment) {
          return moment.type === 'Middle';
        }),
        function (boxart, moment) {
          return {
            id: video.id,
            title: video.title,
            url: boxart.url,
            time: moment.time
          };
        }
      );
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
  '015': sol015,
  '016': sol016,
  '017': sol017,
  '018': sol018,
  '019': sol019,
  '020': sol020,
  '021': sol021,
  '022': sol022,
  '023': sol023,
  '024': sol024,
};
