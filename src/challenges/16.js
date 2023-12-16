export function transformTree(tree) {
  // Helper function to perform the recursive transformation
  const transformNode = function createNode(index) {
    // Base case: if the index is out of bounds or the value is null
    if (index >= tree.length || tree[index] === null) {
      return null;
    }

    // Creates the current node and adds it to the stack
    const node = {
      value: tree[index],
      left: transformNode(2 * index + 1),
      right: transformNode(2 * index + 2),
    };

    return node;
  };

  // Starts the transformation from the root (index 0) and it returns the helper function recursively from there
  const treeObject = transformNode(0);
  return treeObject;
}