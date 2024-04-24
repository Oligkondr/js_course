const hexToRgb = (color) => {
    const x = color.slice(1);
    const y = [];
    for (let i = 0; i < x.length; i += 2) {
        y.push(x[i] + x[i + 1]);
    }
    return {r: parseInt(y[0], 16), g: parseInt(y[1], 16), b: parseInt(y[2], 16)};
};

console.log(hexToRgb('#24ab00'));

const rgbToHex = (r, g, b) => {
    const red = r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16);
    const green = g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16);
    const blue = b.toString(16).length === 1 ? '0' + b.toString(16) : b.toString(16);
    return `#${red}${green}${blue}`;
};

console.log(rgbToHex(0, 0, 0)) // #000000
// console.log(rgbToHex(255, 255, 255)) // #ffffff
// console.log(rgbToHex(0, 132, 12)) // #00840c
// console.log(rgbToHex(36, 171, 0)) // #24ab00
// console.log(rgbToHex(84, 63, 171)) // #543fab
// console.log(rgbToHex(247, 0, 222)) // #f700de
// console.log(rgbToHex(198, 1, 35)) // #c60123