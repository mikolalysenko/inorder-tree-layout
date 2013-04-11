"use strict"

var bits = require("bit-twiddle")

function rootInorder(n) {
  return (bits.nextPow2(n+1)-1)>>>1
}
exports.root = rootInorder

function beginInorder(n) {
  return 0
}
exports.begin = beginInorder

function endInorder(n) {
  return n-1
}
exports.end = endInorder

function heightInorder(n, x) {
  return bits.countTrailingZeros(~x)
}
exports.height = heightInorder

function prevInorder(n, x) {
  return x-1
}
exports.prev = prevInorder

function nextInorder(n, x) {
  return x+1
}
exports.next = nextInorder

function parentInorder(n, x) {
  var h = bits.countTrailingZeros(~x)
  return (x & ~(1<<(h+1)) )^(1<<h)
}
exports.parent = parentInorder

function leftInorder(n, x) {
  return x-(1<<(bits.countTrailingZeros(~x)-1))
}
exports.left = leftInorder

function rightInorder(n, x) {
  return x+(1<<(bits.countTrailingZeros(~x)-1))
}
exports.right = rightInorder