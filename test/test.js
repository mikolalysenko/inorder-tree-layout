var layout = require("../inorder")


function T(v,l,r) {
  return {
      v: v
    , left: l || null
    , right: r || null
    , h: Math.max(l ? l.h : -1, r ? r.h : -1) + 1
    , n: (l ? l.n : 0) + (r ? r.n : 0) + 1
  }
}

require("tap").test("inorder-tree-layout", function(t) {

  //Do inorder traversal
  function testTree(root) {
    var n = root.n
    t.equals(layout.root(n), root.v)
    function visit(node, parent) {
      t.equals(layout.height(n, node.v), node.h)
      if(parent) {
        t.equals(layout.parent(n, node.v), parent.v)
      }
      if(node.left) {
        t.equals(layout.left(n, node.v), node.left.v)
        visit(node.left, node)
      }
      if(node.right) {
        t.equals(layout.right(n, node.v), node.right.v)
        visit(node.right, node)
      }
    }
    visit(root, null)
  }
  
  testTree(T(3, T(1, T(0), T(2)), T(5, T(4), T(6))))
  testTree(T(1, T(0), T(2)))
  testTree(T(0))
  testTree(T(1, T(0), null))
  
  t.end()
})