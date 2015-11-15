function ex001(console, names) {
  for (var i = 0, len = names.length; i < len; i += 1) {
    console.log(names[i]);
  }
}

function ex002(console, names) {
  names.forEach(function(name) {
    console.log(name);
  });
}

function ex003(newReleases) {
  var videoAndTitlePairs = [];

  newReleases.forEach(function(video) {
    videoAndTitlePairs.push({id:video.id, title: video.title});
  });

  return videoAndTitlePairs;
}

function ex004(projectionFunction) {
  var results = [];

  this.forEach(function (item) {
    results.push(projectionFunction(item));
  });

  return results;
}

function ex005(newReleases) {
  return newReleases.map(function(video) {
    return {id: video.id, title: video.title};
  });
}

function ex006(newReleases) {
  var videos = [];

  newReleases.forEach(function(video) {
    if (video.rating === 5.0) {
      videos.push(video);
    }
  });

  return videos;
}

function ex007(predicateFunction) {
  var results = [];

  this.forEach(function (itemInArray) {
    if (predicateFunction(itemInArray)) {
    results.push(itemInArray);
    }
  });

  return results;
}

function ex008(newReleases) {
  return newReleases.
    filter(function(video) {
      return video.rating === 5.0;
    }).
    map(function(video) {
      return video.id;
    });
}

function ex009(movieLists) {
  var allVideoIdsInMovieLists = [];

  movieLists.forEach(function(movieList) {
    movieList.videos.forEach(function(video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  return allVideoIdsInMovieLists;
}

function ex010() {
  var results = [];

  this.forEach(function (subArray) {results.push.apply(results, subArray);});

  return results;
}

function ex011(movieLists) {
  return movieLists.
    map(function(movieList) {
      return movieList.videos.map(function(video) {
        return video.id;
      });
    }).
    concatAll();
}

function ex012(movieLists) {
  return movieLists.
    map(function(movieList) {
      return movieList.videos.
        map(function(video) {
          return video.boxarts.
            filter(function(boxart) {
              return boxart.width === 150;
            }).
            map(function(boxart) {
              return {id: video.id, title: video.title, boxart: boxart.url};
            });
        }).
        concatAll();
    }).
    concatAll();
}

function ex013(projectionFunctionThatReturnsArray) {
  return this
    .map(function (item) {return projectionFunctionThatReturnsArray(item);})
    .concatAll();
}

function ex014(movieLists) {
  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return video.boxarts.
        filter(function(boxart) {
          return boxart.width === 150;
        }).
        map(function(boxart) {
          return {id: video.id, title: video.title, boxart: boxart.url};
        });
    });
  });
}

function ex015(boxarts) {
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

function ex016(combiner, initialValue) {
  var counter, accumulatedValue;

  if (this.length === 0) {
    return this;
  }
  else {
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    }
    else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    }
    else {
      throw "Invalid arguments.";
    }
  }

  while(counter < this.length) {
    accumulatedValue = combiner(accumulatedValue, this[counter])
    counter++;
  }

  return [accumulatedValue];
}

function ex017(ratings) {
  return ratings.
    reduce(function(acc, curr) {
      if(acc > curr) {
        return acc;
      }
      else {
        return curr;
      }
  });
}

function ex018(boxarts) {
  return boxarts.
    reduce(function(acc,curr) {
      if (acc.width * acc.height > curr.width * curr.height) {
        return acc;
      }
      else {
        return curr;
      }
  }).
  map(function(boxart) {
    return boxart.url;
  });
}

function ex019(videos) {
  return videos.reduce(function (accumulatedMap, video) {
    var copyOfAccumulatedMap = Object.create(accumulatedMap);

    copyOfAccumulatedMap[video.id] = video.title;

    return copyOfAccumulatedMap;
  }, {});
}

function ex020(movieLists) {
  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return video.boxarts.
        reduce(function(acc,curr) {
          if (acc.width * acc.height < curr.width * curr.height) {
            return acc;
          }
          else {
            return curr;
          }
        }).
        map(function(boxart) {
          return {id: video.id, title: video.title, boxart: boxart.url};
        });
    });
  });
}

function ex021(videos, bookmarks) {
  var counter, videoIdAndBookmarkIdPairs = [];

  for(var counter = 0; counter < Math.min(videos.length, bookmarks.length); counter++) {
    videoIdAndBookmarkIdPairs.push({videoId: videos[counter].id, bookmarkId: bookmarks[counter].id});
  }

  return videoIdAndBookmarkIdPairs;
}

function ex022(left, right, combinerFunction) {
  var counter, results = [];

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter],right[counter]));
  }

  return results;
}

function ex023(videos, bookmarks) {
  return Array.zip(videos, bookmarks, function (video, bookmark) {
    return {videoId: video.id, bookmarkId: bookmark.id};
  });
}

function ex024(movieLists) {
  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return Array.zip(
        video.boxarts.reduce(function(acc,curr) {
          if (acc.width * acc.height < curr.width * curr.height) {
            return acc;
          }
          else {
            return curr;
          }
        }),
        video.interestingMoments.filter(function(interestingMoment) {
          return interestingMoment.type === "Middle";
        }),
        function(boxart, interestingMoment) {
          return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
        });
    });
  });
}

function ex025(lists, videos) {
  return lists.map(function(list) {
    return {
      name: list.name,
      videos:
        videos.
          filter(function(video) {
            return video.listId === list.id;
          }).
          map(function(video) {
            return {id: video.id, title: video.title};
          })
    };
  });
}

module.exports = {
  '001': ex001,
  '002': ex002,
  '003': ex003,
  '004': ex004,
  '005': ex005,
  '006': ex006,
  '007': ex007,
  '008': ex008,
  '009': ex009,
  '010': ex010,
  '011': ex011,
  '012': ex012,
  '013': ex013,
  '014': ex014,
  '015': ex015,
  '016': ex016,
  '017': ex017,
  '018': ex018,
  '019': ex019,
  '020': ex020,
  '021': ex021,
  '022': ex022,
  '023': ex023,
  '024': ex024,
  '025': ex025,
};
