inorder-tree-layout
===================
Operations on nodes for balanced binary trees stored in in-order layout.  These are useful if you are building data structures, like binary search trees, implicitly (ie not storing pointers to subtrees).

## Install

    npm install inorder-tree-layout

## API

```javascript
var layout = require("inorder-tree-layout")
```

**Conventions:**

* `n` is always the size of the tree
* `x` is the index of a node in the tree

### `layout.root(n)`
Returns the index of the root of a tree of size n.

### `layout.begin(n)`
Returns the index of the first node of the tree

### `layout.end(n)`
Returns the index of the last node in the tree

### `layout.height(n, x)`
Returns the height of node `x` in a tree of size `n`

### `layout.prev(n, x)`
Returns the predecessor of `x` in an in-order traversal

### `layout.next(n, x)`
Returns the successor of `x` in an in-order traversal

### `layout.parent(n, x)`
Returns the parent of `x` in a tree of size `n`

### `layout.left(n, x)`
Returns the left child of `x`

### `layout.right(n, x)`
Returns the right child of `x`

# Credits
(c) 2013 Mikola Lysenko. MIT License
