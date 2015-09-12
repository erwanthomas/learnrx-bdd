'use strict';

var names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'];

var map = {
  array: [1, 2, 3, 4, 5],
  func: function (item) { return item * 10; }
};

var newReleases = [
  {
    "id":70111470,
    "title":"Die Hard",
    "boxart":"http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark":[]
  },
  {
    "id":654356453,
    "title":"Bad Boys",
    "boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark":[
      {
        "id":432534,
        "time":65876586
      }
    ]
  },
  {
    "id":65432445,
    "title":"The Chamber",
    "boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 4.0,
    "bookmark":[]
  },
  {
    "id":675465,
    "title":"Fracture",
    "boxart":"http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating": 5.0,
    "bookmark":[
      {
        "id":432534,
        "time":65876586
      }
    ]
  }
];

var filter = {
  array: [1, 2, 3, 4, 5],
  func: function (item) { return item > 3; }
};

var movieLists = [
  {
    name: "New Releases",
    videos: [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [
          {
            id: 432534,
            time: 65876586
          }
        ]
      }
    ]
  },
  {
    name: "Dramas",
    videos: [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [
          {
            id: 432534,
            time: 65876586
          }
        ]
      }
    ]
  }
];

var concatAll = {
  array: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
};

module.exports = {
  '001': names,
  '002': names,
  '003': newReleases,
  '004': map,
  '005': newReleases,
  '006': newReleases,
  '007': filter,
  '008': newReleases,
  '009': movieLists,
  '010': concatAll,
  '011': movieLists,
};
