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
]
```

For each video in this `newReleases` array, add a projected `{ id, title }`
pair to the `videoAndTitlePairs` array.

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

*Exercise 11: Use `map` and `concatAll` to project and flatten the
movieLists into an array of video ids*

Hint: use two nested calls to `map` and one call to `concatAll`.

```javascript
function ex011(movieLists) {
  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return movieLists // Complete this expression!
}
```

Wow! **Great work**. Mastering the combination of `map` and `concatAll`
is key to effective functional programming. You're half way there! Let's
try a more complicated example...

*Exercise 12: Retrieve id, title, and a 150x200 box art url for every
video*

You've managed to flatten a tree that's two levels deep, let's try for
three! Let's say that instead of a single boxart url on each video, we
had a collection of boxart objects, each with a different size and url.
Create a query that selects `{ id, title, boxart }` for every video in
the `movieLists`. This time though, the boxart property in the result
will be the url of the boxart object with dimensions of 150x200px. Let's
see if you can solve this problem with `map`, `concatAll` and `filter`.

**There's just more one thing: you _can't_ use indexers**. In other
words, this is **illegal**: `var itemInArray = movieLists[0];`.

Furthermore, **you're not allowed to use indexers in any of the
remaining exercises** unless you're implementing one of the five
functions. THere is a very good reason for this restriction, and that
reason will eventually be explained. For now, you'll simply have to
accept it on faith that this restriction serves a purpose. :)

```json
[
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
]
```

```javascript
function ex012(movieLists) {
  // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists // Complete this expression!
}
```
Fantastic job! Now you've learned to use `concatAll` alongside `map` and
`filter` to queries trees. Notice that **`map` and `concatAll` are very
commonly chained together**. Let's create a small helper function to help
us with this common pattern.

*Exercise 13: Implement `concatMap`*

Nearly every time we flatten a tree we chain `map` and `concatAll`.
Sometimes, if we're dealing with a tree several levels deep, we'll
repeat this combination many times in our code. To save on typing, let's
create a `concatMap` function that's just a `map` operation, followed by a
`concatAll`.

```javascript
// Let's pretend this function is a method of Array.prototype
function ex013(projectionFunctionThatReturnsArray) {
  return this
    .map(function (item) {
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return an new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
    })
    .concatAll(); // apply `concatAll` to flatten the two-dimensional array
}
```

Now, instead of chaining `map` and `concatAll` to flatten a tree, we can
just use `concatMap` helper function.

*Exercise 14: Use `concatMap` to retrieve id, title and 150x200 box art
url for every video*

Let's repeat the exercise we just performed. However this time we'll
simplify the code by replacing the chained `map` + `concatAll` calls
with `concatMap`.

```javascript
function ex014(movieLists) {
  // Use one or more concatMap, map, and filter calls to create an array with the following items
  // [
  //   {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //   {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //   {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //   {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists // Complete this expression!
}
```

It's a very common pattern to see several nested `concatMap` operations,
with the last operation being a `map`. You can think of this pattern as
the functional version of a nested `forEach`.

## Reducing Arrays

Sometimes we need to perform an operation on more than one item in the
array *at the same time*. For example, let's say we need to find the
largest integer in an array. We can't use `filter` operation, because it
only examines one item at a time. To find the largest integer we need to
compare items in the array to each other.

One approach could be to select an item in the array as the *assumed*
largest number (perhaps the first item), and then compare that value to
every other item in the array. Each time we come accrow a number that
was larger than our assumed largest number, we'd replace it with the
larger value, and continue the process until the entire array was
traversed.

If we replaced the specific size comparison with a closure, we could
write a function that handled the array traversal process for us. At
each step our function would apply the closure to the last value and the
current value and use the result as the last value the next time.
Finally we'd be left with only one value. This process is known as
*reducing* because we reduce many values to a single value.

*Exercise 15: Use `forEach to find the largest box art*

In this example we use `forEach` to find the largest boxart. Each time we
examine a new boxart we update a variable with the currently known
maximum size. If the boxart is smaller than the maximum size, we discard
it. If it's larger, we keep track of it. Finally we're left with a
single boxart which must necessarily be the largest.

```json
[
  { "width": 200, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
  { "width": 150, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  { "width": 300, "height": 200, "url": "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
  { "width": 425, "height": 150, "url": "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
]
```

```javascript
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
```

This process is a reduction because we're using the information we
derived from the last computation to calculate the current value.
Wouldn't it be nice if we could just specify what operation we wanted to
perform on the last and current value ? Let's create a helper function
to perform reductions on arrays.

*Exercise 16: Implement `reduce`*

Let's add a `reduce` function to the `Array` type.

```javascript
// Let's pretend this function is a method of Array.prototype.
function ex016(combiner, initialValue) {
  var counter, accumulatedValue;

  // If the array is empty, do nothing and return itself.
  if (this.length === 0) {
    return this;
  }

  switch (arguments.length) {
    case 0: throw new TypeError('Invalid arguments for Array#reduce');

    // If the user didn't pass an initial value, use the first item.
    case 1:  counter = 1; accumulatedValue = this[0]; break;

    // Else use initial value as first item.
    default: counter = 0; accumulatedValue = initialValue;
  }

  for (; counter < this.length; counter += 1) {
    accumulatedValue = combiner(accumulatedValue, this[counter]);
  }

  // Contrary to all ECMAScript specifications, our implementation always
  // wraps the last accumulated value in an array before returning it.
  return [accumulatedValue];
}

```

*Exercise 17: Retrieve the largest rating*

Let's use our new `reduce` function to isolate the largest value in an
array of ratings.

```json
[ 2, 3, 1, 4, 5 ]
```

```javascript
function ex017(ratings) {
  // You should return an array containing only the largest rating.
  // Remember that `reduce` always returns an array with one item.
  return ratings.reduce // complete this expression
}
```

Nice work. Now let's try combining `reduce` with our other functions to
build more complex queries.

*Exercise 18: Retrieve url of the largest boxart*

Let's try combining `reduce` with `map` to reduce multiple boxart
objects to a single value : the url of the largest box art.

```javascript
function ex018(boxarts) {
  return boxarts.reduce // Complete this expression
}
```

*Exercise 19: Reducing with an initial value*

Sometimes when we reduce an array, we want the reduced value to be a
different type than the items stored in the array. Let's say we have an
array of videos and we want to reduce them to a single map where the key
is the video id and the value is the video's title.

```json
[
  { "id": 65432445, "title": "The Chamber" },
  { "id": 675465, "title": "Fracture" },
  { "id": 70111470, "title": "Die Hard" },
  { "id": 654356453, "title": "Bad Boys" }
]
```

```javascript
function ex019(videos) {
  return videos
    .reduce(function (accumulatedMap, video) {

      // --- INSERT CODE TO ADD THE VIDEO TITLE TO THE MAP USING THE VIDEO
      // --- ID AS THE KEY

      return accumulatedMap;
    }, {}); // Use an empty map as the initial value instead of the first item in the list.
}
```

Nice work. Now let's try combining `reduce` with our other functions to
build more complex queries.

*Exercise 20: Retrieve the id, title, and _smallest_ box art url for
every video*

This is a variation of the problem we solved earlier, where we retrieved
the url of the box art with a width of 150px. This time we'll use
`reduce` instead of `filter` to retrieve the _smallest_ box art in the
`boxarts` array.

```javascript
function ex020(movieLists) {
  // complete this expression with one or more concatMap, map and reduce calls !
  return movieLists
}
```

## Zipping Arrays

Sometimes we nned to combine two arrays by progressively taking an item
from each and combining the pair. If you visualize a zipper, where each
side is an array, and each tooth is an item, you'll have a good idea of
how the zip operation works.

*Exercice 21: Combine videos and bookmarks by index*

Use a `for` loop to traverse the videos and bookmarks arrays at the same
time. For each video and bookmark pair, create a `{ videoId, bookmarkId
}` pair and add it to the `videoIdAndBookmarkIdPairs` array.

- videos:

```json
[
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
]
```

- bookmarks:

```json
[
  { "id": 470, "time": 23432 },
  { "id": 453, "time": 234324 },
  { "id": 445, "time": 987834 }
]
```

```javascript
function ex021(videos, bookmarks) {
  var counter, pairsLength;

  var videoIdAndBookmarkIdPairs = [];

  counter = 0;
  pairsLength = Math.min(videos.length, bookmarks.length);

  for (; counter < pairsLength; counter += 1) {
    // insert code here to create a { videoId, bookmarkId } pair and add
    // it to the videoIdAndBookmarkIdPairs !
  }

  return videoIdAndBookmarkIdPairs;
}
```

*Exercise 22: Implement `zip`*

Let's add a static `zip` function to the `Array` type. The `zip`
function accepts a combiner function, traverses each array at the same
time, and calls the combiner function on the current item on the
left-hand-side and right-hand-side. The `zip` function requires an item
from each array in order to call the combiner function, therefore the
array returned by `zip` will only be as large as the smallest input
array.

```javascript
// Let's pretend this function is a method of Array.
function ex022(left, right, combinerFunction) {
  var results = [];
  var counter = 0;
  var zipLength = Math.min(left.length, right.length);

  for (; counter < zipLength; counter += 1) {
    // Add code here to apply the combinerFunction to the left and
    // right-hand items in the respective arrays.
  }

  return results;
}
```

*Exercice 23: Combine videos and bookmarks by index*

Let's repeat exercise 21, but this time, let's use your new `zip`
function. For each video and bookmark pair, create a `{ videoId,
bookmarkId }` pair.

```javascript
function ex023(videos, bookmarks) {
  return Array.zip // complete this expression.
}
```

*Exercise 24: Retrieve each video's id, title, middle interesting moment
time, and _smallest_ box art url.*

This is a variation of the problem we solved earlier. This time each
video has an interesting moments collection, each representing a time
during which a screenshot is interesting or representative of the title
as a whole. Notice that both the `boxarts` and `interestingMoments`
arrays are located at the same depth in the tree. Retrieve the time of
the middle interesting moment and the smallest box art url
simultaneously with `zip`. Return an `{ id, title, time, url }` object
for each video.

```json
[
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
]
```

```javascript
function ex024(movieLists) {
  return movieLists // complete this expression !
}
```

## Powerful Queries

Now that we've learned the five operators, let's flex our muscles and
write some powerful queries.

*Exercise 25: Converting from Arrays to Trees*

When information is organized in a tree like a JSON expression, relationships
point from parent to child. In relational systems like databases, relationships
point from children to their parents. Both ways of organizing information are
equivalent, and depending on the circumstances, we might get data organized in
one way or another. It may surprise you to learn that you can use the 5 query
functions you already know to easily convert between these representations. In
other words, **not only can you query arrays from trees, you can query trees
from arrays**.

We have 2 arrays each containing lists, and videos respectively. Each video has
a `listId` field indicating its parent list.

- lists:

```json
[
	{ "id": 5434364, "name": "New Releases" },
	{ "id": 65456475, "name": "Thrillers" }
]
```

- videos:

```json
[
	{ "listId": 5434364, "id": 65432445, "title": "The Chamber" },
	{ "listId": 5434364, "id": 675465, "title": "Fracture" },
	{ "listId": 65456475, "id": 70111470, "title": "Die Hard" },
	{ "listId": 65456475, "id": 654356453, "title": "Bad Boys" }
]
```

We want to build an array of list objects, each with a `name` and a `videos`
array. The `videos` array will contain the video's `id` and `title`. In other
words we want to build the following structure:

```json
[
	{
		"name": "New Releases",
		"videos": [
			{ "id": 65432445, "title": "The Chamber" },
			{ "id": 675465, "title": "Fracture" }
		]
	},
	{
		"name": "Thrillers",
		"videos": [
			{ "id": 70111470, "title": "Die Hard" },
			{ "id": 654356453, "title": "Bad Boys" }
		]
	}
]
```

```javascript
function ex025(lists, videos) {
  return lists // complete this expression
}
```

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
```
