# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rabhas/lotide`

**Require it:**

`const _ = require('@rabhas/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(arr)`: function takes an array as input and returns the first element of the array
* `tail(arr)`: function takes an array as input and returns the same array sans the first element
* `middle(arr)`: function takes an array as input and returns the middle element (when the length of the array is odd) or returns the middle two elements
  (when the array length is even),
*  `assertArraysEqual(arr1, arr2)`: takes in two arrays and checks if they are equal,
*  `assertEqual(a,b)`: takes in 2 primitive values and assess if they are equal,
*  `eqArrays(arry1, arry2)`: checks if 2 arrays are equal,
*  `assertObjectsEqual(obj1, obj2)`: takes in 2 objects and assess if they are equal,
*  `countLetters(string)`: takes in a string and returns the total number of letter in it,
*  `countOnly(array)`: takes in an array and an object containting items marked false or true. returns an objec with the number of occurences of items marked true in  
                     the array.,
*  `eqObjects(...)`: function compares two objects, returns boolean statement,
*  `findKey(...)`:  takes a object in and a callback function callback function will inspect each property of the object and the key of the first property that evaluates to true will be returned,
*  `findKeyByValue(...)`: returns the first key to a property that evaluates to value,
*  `letterPositions(...)`: takes in a string with a single character,
*  `map(...)`: manipulates each element of arr based on supplied callback functions,
*  `takeUntil(...)`: evaluates each element of arr with the callback function. Returns a copy of the array from index 0 to the the first index where the 
                      callback evaluates to true,
*  `without(...)`: removes all elements of targetArray that occurs in searchArray.