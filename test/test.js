var layout = require("../inorder")
  , layoutTester = require("tree-layout-tester")
  , bits = require("bit-twiddle")

require("tap").test("inorder-tree-layout", function(t) {

  var T = layoutTester.T
    , testTree = layoutTester.bind({}, t, layout)

  testTree(T(0))
  testTree(T(1, T(0)))
  testTree(T(1, T(0), T(2)))
  testTree(T(2, T(1, T(0)), T(3)))
  testTree(T(3, T(1, T(0), T(2)), T(4)))
  testTree(T(3, T(1, T(0), T(2)), T(5, T(4))))
  testTree(T(3, T(1, T(0), T(2)), T(5, T(4), T(6))))
  testTree(T(4, T(2, T(1, T(0)), T(3)), T(6, T(5), T(7))))
  testTree(T(5, T(3, T(1, T(0), T(2)), T(4)), T(7, T(6), T(8))))
  testTree(T(6, T(3, T(1, T(0), T(2)), T(5, T(4))), T(8, T(7), T(9))))
  
  t.end()
})