const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {
  constructor() {
    this.r = null;
  }

  root() {
    return this.r;
  }

  add(d) {
    function addFunc(node, d) {
      if (d < node.data) {
        if (node.left === null) {
          node.left = new Node(d);
        } else {
          addFunc(node.left, d);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(d);
        } else {
          addFunc(node.right, d);
        }
      }
    }
    if (this.r === null) {
      this.r = new Node(d);
    } else {
      addFunc(this.r, d);
    }

  }

  has(d) {
    function hasFunc(node, d) {
      if (d == node.data) {
        return true;
      } else if (d < node.data) {
        if (node.left === null) {
          return false;
        } else {
          return hasFunc(node.left, d);
        }
      } else {
        if (node.right === null) {
          return false;
        } else {
          return hasFunc(node.right, d);
        }
      }
    }
    return hasFunc(this.r, d);
  }

  find(d) {
    function findFunc(node, d) {
      if (d == node.data) {
        return node;
      } else if (d < node.data) {
        if (node.left === null) {
          return null;
        } else {
          return findFunc(node.left, d);
        }
      } else {
        if (node.right === null) {
          return null;
        } else {
          return findFunc(node.right, d);
        }
      }
    }
    return findFunc(this.r, d);
  }

  remove(d) {
    function minFunc(node) {
      if (node.left === null) {
        return node.data;
      } else {
        return minFunc(node.left);
      }
    }

    function delFunc(parNode, d) {
      let child;
      if (d < parNode.data) {
        child = parNode.left;
      } else {
        child = parNode.right;
      }
      if (d == child.data) {
        if (child.left != null && child.right != null) {
          child.data = minFunc(child.right);
          delFunc(child, child.data);
        } else {
          if (child.left != null) {
            if (d < parNode.data) {
              parNode.left = child.left;
            } else {
              parNode.right = child.left;
            }
          } else if (child.right != null) {
            if (d < parNode.data) {
              parNode.left = child.right;
            } else {
              parNode.right = child.right;
            }
          } else {
            if (d < parNode.data) {
              parNode.left = null;
            } else {
              parNode.right = null;
            }
          }
        }
      } else {
        delFunc(child, d);
      }
    }
  if (d == this.r.data) {
    if (this.r.left != null && this.r.right != null) {
      this.r.data = minFunc(this.r.right);
      delFunc(this.r, this.r.data);
    } else {
      if (this.r.left != null) {
        this.r = this.r.left;
      } else if (this.r.right != null) {
        this.r = this.r.right;
      } else {
        this.r = null;
      }
    }
  } else {
    delFunc(this.r, d);
  }
}

min() {
  function minFunc(node) {
    if (node.left === null) {
      return node.data;
    } else {
      return minFunc(node.left);
    }
  }
  return minFunc(this.r);
}

max() {
  function maxFunc(node) {
    if (node.right === null) {
      return node.data;
    } else {
      return maxFunc(node.right);
    }
  }
  return maxFunc(this.r);
}

}