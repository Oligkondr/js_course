const students = [
    { name: 'Tirion', class: 'B', mark: 2 },
    { name: 'Keit', class: 'A', mark: 3 },
    { name: 'Ramsey', class: 'A', mark: 4 },
    { name: 'Bronn', class: 'B', mark: 3 },
    { name: 'Sam', class: 'A', mark: 2 },
    { name: 'Aria', class: 'B', mark: 5 },
    { name: 'Keit', class: 'B', mark: 4 },
    { name: 'Rob', class: 'B', mark: 4 },
    { name: 'Taywin', class: 'A', mark: 5 },
];

const groupBy = (array, group) => array.reduce((acc, user) => {
    if (!Object.hasOwn(acc, user[group])) {
        acc[user[group]] = [];
    }
    acc[user[group]].push(user);
    return acc;
}, {});

console.log(groupBy(students, 'mark'));
