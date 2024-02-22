// const res = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
// ];
// console.log(res[0]);
// console.log(res[0][0]);
// console.log(res[0][1]);

// const array = [1, 2, 3, 4, 5];
// const out = [1, 2];
// for (const x of array) {
//     if (!out.includes(x)) {
//         console.log(x);
//     }
// }

// const a = 'apple'
// console.log(`>>>${a}<<<`);

// const ar = [];
// if (ar.length) {
//     console.log('yes');
// }else {
//     console.log('no');
// }

// const locations = [['Park', [10, 5]], ['Sea', [1, 3]], ['Museum', [8, 4]]];
//
// for (const [x, [y, z]] of locations) {
//     console.log([x, [y, z]]);
// }

// let a = 3 + '+' + 2;
// console.log(a);
// console.log();

// const original = [1, 2, 3];
// console.log(original);
// original.reverse()
// console.log(original);

// const gsd = (num1, num2) => {
//   let result;
//   for (let i = 1; i < Math.max(num1, num2); i += 1) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       result = i;
//     }
//   }
//   return result;
// };

// const gcd = (number1, number2) => {
//   let maxNum = Math.max(number1, number2);
//   let minNum = Math.min(number1, number2);
//   while (maxNum - minNum !== 0) {
//     maxNum -= minNum;
//     maxNum = Math.max(maxNum, minNum);
//     minNum = Math.min(maxNum, minNum);
//     console.log(maxNum, minNum);
//   }
//   return maxNum;
// };

// console.log(gcd(25, 50));
// console.log(gcd(100, 52));
// console.log(gcd(9, 3));
// console.log(gcd(1260, 3400));
// console.log(gcd(65, 39));

// const length = 10
// const step = 2
// let start = 34
// const check = start + ((length - 1) * step);
// console.log(check);
// if (check > 100) {
//   start -= check - 100
// }
// console.log(start);

// let number = 58;
// let correctAnswer = number !== 1;
// for (let i = 2; i < number; i++) {
//   number % i === 0 ? correctAnswer *= false : correctAnswer *= true;
// }
//
// console.log(correctAnswer);

// const sum = (array) => {
//   let sum = 0;
//   for (const elem of array) {
//     if (elem % 2 === 0) {
//       sum += elem;
//     }
//   }
//   return sum;
// };
//
// console.log(sum([2, 3, 4, 5, 8, 5, 5])); // 14
// console.log(sum([2, 3, 11, 5, 3, 5, 5])); // 2
// console.log(sum([])); // 0
//
// const max = (array) => {
//   let max = array[0];
//   for (const elem of array) {
//     max = Math.max(max, elem);
//   }
//   return max;
// };
//
// console.log(max([1, 2, 3, 4])); // 4
// console.log(max([1, 2, 7, 4])); // 7
// console.log(max([-4, -6, -1])); // -1
// console.log(max([0, 0]));

// let inputValue = 77;
// let isPrime = inputValue !== 1;  //bcoz 1 is not prime
// for (let i = 2; i < inputValue; i++) {
//   inputValue % i === 0 ? isPrime *= false : isPrime *= true;
//   console.log(isPrime);
// }
//
// console.log(isPrime);

// const checkAnswer = (name, answer, body) => {
//   const correctAnswer = body();
//   let message;
//   if (answer == correctAnswer) {
//     message = 'Correct!';
//   } else {
//     message = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's tray again, ${name}!`;
//   }
//   return message;
// };

const sumOfSquareDigits = (num) => {
    const numAsStr = String(num);
    let sum = 0;
    for (let i = 0; i < numAsStr.length; i += 1) {
        const digit = Number(numAsStr[i]);
        sum += digit * digit;
    }

    return sum;
};
const isHappyNumber = (num) => {
    let copy = num;
    for (let i = 0; i < 10; i++) {
        copy = sumOfSquareDigits(copy);
        if (copy === 1) {
            return true;
        }
    }
    return false;
};

console.log(isHappyNumber(7));
