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

Notice that `forEach` lets us specify _what_ we want to happen to each
item in the array, but hides _how_ the array is traversed.

## Projecting Arrays

Applying a function to a value and creating a new value is called a
_projection_. To project one array into another, we apply a projection
function to each item in the array and collect the results in a new
array.

*Exercise 3: Project the following array of videos into an array of
`{id,title}` pairs using `forEach`.*

```json
[
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
]
```

For each video in this `newReleases` array, add a projected `{ id, title
}` pair to the `videoAndTitlePairs` array.

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
type. `map` accepts the projection function to be applied to each item
in the source array, and returns the projected array.

```javascript
// Let's pretend this function is a method of Array.prototype
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

*Exercise 5: Use `map` to project an array of videos into an array of
`{ id, title }` pairs*

Let's repeat the exercise of collecting `{ id, title }` pairs for each
video in the `newReleases` array, but **this time we'll use our map
function**.

```javascript
function ex005(newReleases) {
  // ------------ INSERT CODE HERE! -----------------------------------
  // Use map function to accumulate {id, title} pairs from each video.
  // ------------ INSERT CODE HERE! -----------------------------------
  return newReleases.map // finish this expression!
}
```

Notice that map allows us to specify _what_ projection we want to apply
to an array, but hides _how_ the operation is carried out.

## Filtering Arrays

Like projection, filtering an array is also a very common operation. To
filter an array we apply a test to each item in the array and collect
the items that pass into a new array.

*Exercise 6: Use `forEach` to collect only those videos with a rating of 5.0*

Use `forEach` to loop through the videos in the `newReleases` array and,
if a video has a rating of 5.0, add it to the `videos` array.

```javascript
function ex006(newReleases) {
  var videos = [];

  // ------------ INSERT CODE HERE! -----------------------------------
  // Use forEach function to accumulate every video with a rating of 5.0
  // ------------ INSERT CODE HERE! -----------------------------------

  return videos;
}
```

Notice that, like `map`, **every `filter` operation shares some
operations in common**:

1. Traverse the array
2. Add objects that pass the test to a new array

Why not abstract away how these operations are carried out ?

*Exercise 7: Implement `filter`*

To make filtering easier, let's add a `filter` function to the Array
type. The `filter` function accepts a _predicate_. A predicate is a
function that accepts an item in the array, and returns a boolean
indicating whether the item should be retained in the new array.

```javascript
// Let's pretend this function is a method of Array.prototype
function ex007(predicateFunction) {
  var results = [];

  this.forEach(function (itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
}
```

Like `map`, `filter` lets us express _what_ data we want without
requiring us to specify _how_ we want to collect the data.

## Query Data by Chaining Method Calls

*Exercise 8: Chain filter and map to collect the ids of videos that have
a rating of 5.0*

```javascript
function ex008(newReleases) {
  // ------------ INSERT CODE HERE! -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.

  return newReleases // Complete this expression
  // ------------ INSERT CODE HERE! -----------------------------------
}
```

Chaining together `map` and `filter` gives us a lot of expressive power.
THese high level functions let us express _what_ data we want, but leave
the underlying libraries a great deal of flexibility in terms of _how_
our queries are executed.

## Querying Trees

Sometimes, in addition to flat arrays, we need to query trees. Trees
pose a challenge because we need to flatten them into arrays in order to
apply `filter` and `map` operations on them. In this section we'll
define a `concatAll` function that we can combine with `map` and
`filter` to query trees.

*Exercise 9: Flatten the `movieLists` array into an array of video ids*

```json
[
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
]
```

Let's start by using two nested `forEach` loops to collect the id of
every video in the two-dimensional `movieLists` array.

```javascript
function ex009(movieLists) {
  var allVideoIdsInMovieLists = [];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return allVideoIdsInMovieLists;
}
```

Flattening trees with nested `forEach` expressions is easy because we
can explicitly add items to the array. Unfortunately it's _exactly_ this
type of low-level operation we've been trying to abstract away with
functions like `map` and `filter`. Can we define a function that's
abstract enough to express our _intent_ to flatten a tree, without
specifying too much information about _how_ to carry out the operation ?

*Exercise 10: Implement `concatAll`*

Let's add a `concatAll` function to the `Array` type. The `concatAll`
function iterates over each sub-array in the array and collects the
results in a new, flat array. Notice that **the `concatAll` function
expects each item in the arrray to be another array**.

```javascript
// Let's pretend this function is a method of Array.prototype
function ex010() {
  var results = [];

  this.forEach(function (subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
}
```

`concatAll` is a very simple function, so much so that it may not be
obvious yet how it can be combined with `map` to query a tree. Let's try
an example...

*Please don't pay attention to the following code:*

```javascript
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
};
```
