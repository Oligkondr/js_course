const users = [
    {
        name: 'Tirion',
        children: [
            {name: 'Mira', birthday: '1983-03-23'},
        ],
    },
    {
        name: 'Bronn',
        children: [],
    },
    {
        name: 'Sam',
        children: [
            {name: 'Aria', birthday: '2012-11-03'},
            {name: 'Keit', birthday: '1933-05-14'},
        ],
    },
    {
        name: 'Rob',
        children: [
            {name: 'Tisha', birthday: '2012-11-03'},
        ],
    },
];

const getChildrenTest = users => {
    const result = [];
    for (const {children} of users) {
        for (const elem of children) {
            result.push(elem);
        }
    }
    return result;
};

const getChildren = users => users.map(({children}) => children).flat();
console.log(getChildren(users));

// console.log(getChildren(users))
