const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')




assertArraysEqual(middle([7,8,9,1]), [8,9])
assertArraysEqual(middle(["a", "b", "c", "d", "e"]), ["c"])