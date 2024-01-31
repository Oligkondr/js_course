const users = [
    { name: 'Igor', age: 19 },
    { name: 'Danil', age: 1 },
    { name: 'Vovan', age: 4 },
    { name: 'Matvey', age: 16 },
];

const filteredUsers = users.filter((user) => user.age > 10)
console.log(filteredUsers);
