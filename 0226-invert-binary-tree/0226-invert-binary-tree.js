/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) return null;

    let mem = root.right;
    root.right = root.left;
    root.left = mem;

    invertTree(root.right);
    invertTree(root.left);

    return root;
};

// binary trees are kind of like linked lists but they have a left and right pointer;
// keep a mem of either left or right;
// switch the left and right pointers;
// recurse through the root until we've hit null;

//         4
//        / \
//       2   7
//      /\   /\
//     1  3 6  9

//         4
//        / \
//       7   2
//      /\   /\
//     6  9 1  3

//         4
//        / \
//       7   2
//      /\   /\
//     9  6 3  1