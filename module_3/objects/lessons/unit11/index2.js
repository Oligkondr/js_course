const make = (name, data = {}) => {
    const defaultData = {
        state: 'moderating',
        createdAt: Date.now(),
    };

    return {...defaultData, ...data, name};
};

console.log(make('Apple'));
console.log(make('Apple', {color: 'green', size: 'large'}));
console.log(make('Apple', {state: 'published'}));
