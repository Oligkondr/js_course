const fizzBuzz = (begin, end) => {
    for (let i = begin; i <= end; i++) {
        const fizz = i % 3 === 0 ? 'Fizz' : '';
        const buzz = i % 5 === 0 ? 'Buzz' : '';
        console.log(`${fizz}${buzz}` || i);
    }
    return 'End';
};
console.log(fizzBuzz(11, 20));
