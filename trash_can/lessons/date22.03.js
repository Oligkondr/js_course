const users = [
    {name: 'Igor', age: 19},
    {name: 'Danil', age: 1},
    {name: 'Vovan', age: 4},
    {name: 'Matvey', age: 16},
];

const names1 = (users) => {
    const result = [];
    for (const {name} of users) {
        result.push(name);
    }
    return result;
};

const names2 = (users) => users.map(({name}) => name)
const age = (users) => users.filter(({age}) => age > 10)

// console.log(names1(users))
// console.log(names2(users))
// console.log(age(users))

const users2 = [
    {name: 'Tirion', email: 'support@hexlet.io', age: 44},
    {name: 'Tirion 2', age: 23},
    {name: 'Tirion 3', email: 'help@hexlet.io', age: 41},
    {name: 'Tirion 4', age: 33},
];

const email = (users) => users.filter(({email}) => email)

console.log(email(users2))
