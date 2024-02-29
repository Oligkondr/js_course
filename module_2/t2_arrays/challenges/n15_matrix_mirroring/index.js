const getMirrorMatrix = (matrix) => matrix
  .map((element) => element
    .map((num, i) => element[i] = i >= element.length / 2
      ? element.at(-(i + 1))
      : element[i]));

const matrix = [
    [11, 12, 13, 14, 15, 16],
    [21, 22, 23, 24, 25, 26],
    [31, 32, 33, 34, 35, 36],
    [41, 42, 43, 44, 45, 46],
    [51, 52, 53, 54, 55, 56],
];
// const matrix = [
//     ['he', 'xl', 'et', 'io'],
//     ['in', 'my', 'hea', 'rt'],
//     ['fo', 're', 've', 'r'],
//     ['an', 'd', 'ev', 'er'],
// ];

console.log(getMirrorMatrix(matrix));
