# WORKING WITH ARRAYS

The Array is Javascript's only collection type. Arrays are everywhere.
We're going to add the five functions to the Array type, and in the
process make it much more powerful and useful. As a matter of fact,
Array already has the map, filter, and reduce functions! However we're
going to to reimplement these functions as a learning exercise.

This section will follow a pattern. First we'll solve problems the way
you probably learned in school, or on your own by reading other peoples
code. In other words, we'll transform collections into new collections
using loops and statements. Then we'll implement one of the five
functions, and then use it to solve the same problem again _without_ the
loop. Once we've learned the five functions, you'll learn how to combine
them to solve complex problems with very little code.

## Traversing an Array

*Exercise 1: Print all the names in an array.*

```javascript
function ex001(console, names) {
  for (var i = 0, len = names.length; i < len; i += 1) {
    console.log(names[i]);
  }
}
```

Ask yourself this question: did we need to specify the order in which
the names were printed? If not, why do it?

*Exercise 2: Use `forEach` to print all the names in an array.*

Let's repeat the previous exercise using the `forEach` function.

```javascript
function ex002(console, names) {

}
```

Notice that `forEach` lets us specify _what_ we want to happen to each item
in the array, but hides _how_ the array is traversed.

## Projecting Arrays

Applying a function to a value and creating a new value is called a
_projection_. To project one array into another, we apply a projection
function to each item in the array and collect the results in a new
array.

*Exercise 3: Project an array of videos into an array of `{id,title}`
pairs using `forEach`.*

```json
[
  {
    "id":70111470,
    "title":"Die Hard",
    "boxart":"http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating":[
      4.0
    ],
    "bookmark":[]
  },
  {
    "id":654356453,
    "title":"Bad Boys",
    "boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating":[
      5.0
    ],
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
    "rating":[
      4.0
    ],
    "bookmark":[]
  },
  {
    "id":675465,
    "title":"Fracture",
    "boxart":"http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    "uri":"http://api.netflix.com/catalog/titles/movies/70111470",
    "rating":[
      5.0
    ],
    "bookmark":[
      {
        "id":432534,
        "time":65876586
      }
    ]
  }
]
```

For each video, add a projected `{ id, title }` pair to the
`videoAndTitlePairs` array.

```javascript
function ex003(newReleases) {
  var videoAndTitlePairs = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate {id, title} pairs from each video.
  // Put the results into the videoAndTitlePairs array using the Array's
  // push() method. Example: videoAndTitlePairs.push(newItem);
  // ------------ INSERT CODE HERE! -----------------------------------


  return videoAndTitlePairs;
}
```

All array projections share two operations in common:

  1. Traverse the source array
  2. Add each item's projected value to a new array

Why not abstract away _how_ these operations are carried out?

*Exercise 4: implement `map`.*

To make projections easier, let's add a `map` function to the `Array`
type. `map` accepts the projection function to be applied to each item in
the source array, and returns the projected array.

```javascript
// Pretend the function belongs to Array.prototype
function ex004(projectionFunction) {
  var results = [];

  this.forEach(function (item) {

    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------

  });

  return results;
}
```

```javascript
module.exports = {
  '001': ex001,
  '002': ex002,
  '003': ex003,
  '004': ex004
};
```
