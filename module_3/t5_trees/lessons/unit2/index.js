const removeFirstLevel = (tree) => tree
  .filter(Array.isArray)
  .flat();

console.log(removeFirstLevel([]));
console.log(removeFirstLevel([1, 100, 3]));
console.log(removeFirstLevel([[1, [3, 2]], 2, { a: 1 }, [3, 5], 2]));
console.log(Array.isArray([]));
console.log(Array.isArray({}));
