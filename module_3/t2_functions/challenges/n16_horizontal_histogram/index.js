const rand = () => Math.floor(Math.random() * 6) + 1


const play = (trowCount, genFunction) => {
    const nums = [];
    const notResult = ['', '', '', '', '', ''];

    for (let i = 0; i < trowCount; i += 1) {
        nums.push(genFunction())
    }

    nums.map((num) => notResult[num - 1] += '#')

    console.log(nums)
    notResult.map((elem, i) => {
        console.log(`${i + 1}|${elem}${elem.length ? ' ' + elem.length : ''}`)
    })
};

console.log(play(10, rand))


// const edges = ['#','###','##','#','####','',]
// let num = 1;
// for (const edge of edges) {
//     console.log(`${num}|${edge}${edge.length ? ' ' + edge.length : ''}`)
//     num += 1;
// }

