// const findFilesByName = (tree, subStr) => {
//     const iter = (node, ancestry) => {
//         const name = getName(node);
//
//         if (isFile(node)) {
//             return name.includes(subStr)
//               ? `${ancestry}/${name}`
//               : [];
//         }
//
//         const children = getChildren(node);
//
//         return children.flatMap((child) => iter(child, name === '/' ? ancestry : `${ancestry}/${name}`));
//     };
//
//     return iter(tree, '');
// };
//
// export default findFilesByName;
