const answers = ['00', '01', '02', '10', '11', '12', '20', '21', '22']

for (const ans of answers) {
    const a = ans[0] === '0';
    const b = ans[0] === '1';
    const c = ans[1] === '1';
    const d = ans[1] === '2';

    const result = !(a || b) && (c || d)

    console.log(ans, result);
}
