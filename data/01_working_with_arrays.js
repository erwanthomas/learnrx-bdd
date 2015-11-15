'use strict';

var names = ['Ben', 'Jafar', 'Matt', 'Priya', 'Brian'];

var map = {
  thisArg: [1, 2, 3, 4, 5],
  args: [
    function (item) { return item * 10; }
  ]
};

var newReleases = [
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
        "id": 432534,
        "time": 65876586
      }
    ]
  },
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
        "id": 432534,
        "time": 65876586
      }
    ]
  }
];

var filter = {
  thisArg: [1, 2, 3, 4, 5],
  args: [
    function (item) { return item > 3; }
  ]
};

var movieLists = [
  {
    "name": "New Releases",
    "videos": [
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
            "id": 432534,
            "time": 65876586
          }
        ]
      }
    ]
  },
  {
    "name": "Dramas",
    "videos": [
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
            "id": 432534,
            "time": 65876586
          }
        ]
      }
    ]
  }
];

var concatAll = {
  thisArg: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
};

var movieListsExtended = [
  {
    "name": "Instant Queue",
    "videos": [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ "id": 432534, "time": 65876586 }]
      }
    ]
  },
  {
    "name": "New Releases",
    "videos": [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { "width": 300, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ "id": 432534, "time": 65876586 }]
      }
    ]
  }
];

var concatMap = {
  thisArg: [0, 1, 2],
  args: [
    function (index) {
      return [
        ['cero','zéro','zero'],
        ['uno','un','one'],
        ['dos','deux','two']
      ][index];
    }
  ]
};

var boxarts = [
  { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
  { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  { "width": 300, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
  { "width": 425, "height": 150, "url": "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
];

var reduce = {
  thisArg: [1, 2, 3],
  args: [
    function (accumulatedValue, currentValue) {
      return accumulatedValue + currentValue;
    }
  ]
};

var ratings = [ 2, 3, 1, 4, 5 ];

var videos = [
  { "id": 65432445, "title": "The Chamber" },
  { "id": 675465, "title": "Fracture" },
  { "id": 70111470, "title": "Die Hard" },
  { "id": 654356453, "title": "Bad Boys" }
];

var videosAndBookmarks = {
  "videos": [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
    }
  ],

  "bookmarks": [
    { "id": 470, "time": 23432 },
    { "id": 453, "time": 234324 },
    { "id": 445, "time": 987834 }
  ]
};

var zip = {
  thisArg: null,
  args: [
    [1, 2, 3],
    [4, 5, 6],
    function (left, right) { return left + right; }
  ]
};

var movieListsWithInterestingMoments = [
  {
    "name": "New Releases",
    "videos": [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxarts": [
          { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4,
        "interestingMoments": [
          { "type": "End", "time": 213432 },
          { "type": "Start", "time": 64534 },
          { "type": "Middle", "time": 323133 }
        ]
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxarts": [
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
          { "width": 140, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5,
        "interestingMoments": [
          { "type": "End", "time": 54654754 },
          { "type": "Start", "time": 43524243 },
          { "type": "Middle", "time": 6575665 }
        ]
      }
    ]
  },
  {
    "name": "Instant Queue",
    "videos": [
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxarts": [
          { "width": 130, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4,
        "interestingMoments": [
          { "type": "End", "time": 132423 },
          { "type": "Start", "time": 54637425 },
          { "type": "Middle", "time": 3452343 }
        ]
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxarts": [
          { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
          { "width": 120, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
          { "width": 300, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
        ],
        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5,
        "interestingMoments": [
          { "type": "End", "time": 45632456 },
          { "type": "Start", "time": 234534 },
          { "type": "Middle", "time": 3453434 }
        ]
      }
    ]
  }
];

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
  '012': movieListsExtended,
  '013': concatMap,
  '014': movieListsExtended,
  '015': boxarts,
  '016': reduce,
  '017': ratings,
  '018': boxarts,
  '019': videos,
  '020': movieListsExtended,
  '021': videosAndBookmarks,
  '022': zip,
  '023': videosAndBookmarks,
  '024': movieListsWithInterestingMoments,
};
