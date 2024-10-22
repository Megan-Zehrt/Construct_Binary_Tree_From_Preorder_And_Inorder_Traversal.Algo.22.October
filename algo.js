// 105. Construct Binary Tree from Preorder and Inorder Traversal



// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.









/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    // Base case: if no elements are left in preorder or inorder
    if (preorder.length === 0 || inorder.length === 0) return null;

    // Step 1: The first element of preorder is the root
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    // Step 2: Find the root value in the inorder array
    const mid = inorder.indexOf(rootVal);

    // Step 3: Recursively build the left and right subtrees
    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
}