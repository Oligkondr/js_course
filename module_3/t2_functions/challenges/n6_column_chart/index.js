const barChart = (arr) => {
    const max = Math.max(...arr)
    const min = Math.min(...arr)
    const height = max - min
    let strings = []

    // let temp = 1 // !!!!

    for (let i = 0; i < height; i++) {
        // strings.push(`${temp < 10 ? temp + ' ' : temp}| `);
        strings.push('');
        // temp++
    }

    const zeroIndex = max - 1;
    // console.log(strings)
    // console.log(strings[zeroIndex])

    const indexes = [];
    for (const elem of arr) {
        const index = [];
        for (let i = 0; i < Math.abs(elem); i++) {
            elem > 0 ? index.push(zeroIndex - i) : index.push((zeroIndex + 1) + i);
        }
        indexes.push(index);
    }
    // console.log(indexes);

    for (const key in indexes) {
        const line = indexes[key]
        const sym = arr[key] > 0 ? '*' : '#'
        // console.log(line)
        strings = strings.map((str, i) => {
            return `${str}${line.includes(i) ? sym : ' '}`;
        })
    }
    console.log(strings.join('\n'));
}

const arr = [20, 2, 8]

barChart(arr)


//1  ' *'
//2  ' *'
//3  ' *'
//4  ' *'
//5  ' *'
//6  '**'
//7  '**'
//8  '**'
//9  '**'
//10 '**'
//11 '  #'
//12 '  #'
//13 '  #'
//14 '  #'
//15 '  #'

// [5, 10, -5, -3, 7]
// [
//   [9, 8, 7, 6, 5],
//   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
//   [10, 11, 12, 13, 14],
//   [10, 11, 12],
//   [9, 8, 7, 6, 5, 4, 3]
// ]

