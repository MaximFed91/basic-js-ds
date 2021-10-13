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

    function delFunc(node, d) {
      if (d < node.data) {
        delFunc(node.left, d);
      } else if (d > node.data) {
        delFunc(node.right, d);
      } else if (node.left != null && node.right != null) {
        node.data = minFunc(node.right);
        node.right = delFunc(node.right, node.data);
      } else {
        if (node.left != null) {
          node = node.left;
        }
        else if (node.right != null) {
          node = node.right;
        }
        else {
          node = null;
        }
          
      }
      return node;
    }
    delFunc(this.r, d);
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