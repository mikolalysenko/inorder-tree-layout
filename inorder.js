"use strict"

var bits = require("bit-twiddle")

function rootInorder(n) {
  var ptree = (bits.nextPow2(n+1)>>>1) - 1
  var f     = n - ptree
  if(f >= ptree) {
    return ptree
  }
  return (ptree>>>1)+f
}
exports.root = rootInorder

function beginInorder(n) {
  return 0
}
exports.begin = beginInorder

function endInorder(n) {
  return n
}
exports.end = endInorder

//This is really horrible because n is not necessarily a power of 2
// If it was, we could just do:
//
//    hieght = bits.countTrailingZeros(~x)
//
// Instead, we need to do a more subtle case-by-case analysis of the node
//  and its position in the tree
function heightInorder(n, x) {
  var ptree = bits.nextPow2(n+1)>>>1
  var f     = n - ptree + 1
  var c     = f + bits.nextPow2(f) - 1
  if(x < c) {
    var h = bits.countTrailingZeros(~x)
    if(x+1-(1<<h) > 2*f) {
      h -= 1
    }
    return h
  }
  x -= f
  var h = bits.countTrailingZeros(~x)
  if(x === (1<<h)-1) {
    return h+1
  }
  return h
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
  var ptree = bits.nextPow2(n+1)>>>1
  var f     = n - ptree + 1
  var c     = f + bits.nextPow2(f) - 1
  if(x < c) {
    var h = bits.countTrailingZeros(~x)
    var y = (x & ~(1<<(h+1)))^(1<<h)
    if(y >= c) {
      var e = bits.nextPow2(c+1) - c - 1
      y -= e
    }
    return y
  }
  var y = x - f
  var h = bits.countTrailingZeros(~y)
  y = (y & ~(1<<(h+1)))^(1<<h)
  return y + f
}
exports.parent = parentInorder

function leftInorder(n, x) {
  var ptree = bits.nextPow2(n+1)>>>1
  var f     = n - ptree + 1
  var c     = f + bits.nextPow2(f) - 1
  if(x < c) {
    var h = bits.countTrailingZeros(~x)
    return x-(1<<(h-1))
  } else if(x === c) {
    return bits.nextPow2(f)-1
  }
  var h = bits.countTrailingZeros(~(x-f))
  return x-(1<<(h-1))
}
exports.left = leftInorder

function rightInorder(n, x) {
  var ptree = bits.nextPow2(n+1)>>>1
  var f     = n - ptree + 1
  var c     = f + bits.nextPow2(f) - 1
  if(x < c) {
    var h = bits.countTrailingZeros(~x)
    return x+(1<<(h-1))
  }
  var h = bits.countTrailingZeros(~(x-f))
  return x + (1<<(h-1))
}
exports.right = rightInorder

function leafInorder(n, x) {
  return heightInorder(n, x) === 0
}
exports.leaf = leafInorder


function loInorder(n, x) {
  while(!leafInorder(n,x)) {
    x = leftInorder(n,x)
  }
  return x
}
exports.lo = loInorder


function hasRight(n, x) {
  var ptree = bits.nextPow2(n+1)>>>1
  var f     = n - ptree + 1
  var c     = f + bits.nextPow2(f) - 1
  if(x < c-1) {
    return bits.countTrailingZeros(~x)
  } else if(x === 0) {
    return 0
  }
  return bits.countTrailingZeros(~(x-f))
}

function hiInorder(n, x) {
  while(hasRight(n, x) > 0) {
    x = rightInorder(n, x)
  }
  return x
}
exports.hi = hiInorder
