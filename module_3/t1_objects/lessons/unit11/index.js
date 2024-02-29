const make = (name, extra = null) => {
    let obj = {'name': name};
    if (extra) {
        if (Object.hasOwn(extra, 'state')) {
            obj.state = extra.state;
        } else {
            obj.state = 'moderating';
        }
        if (Object.hasOwn(extra, 'createdAt ')) {
            obj.createdAt = extra.createdAt;
        } else {
            obj.createdAt = Date.now();
        }
        for (const elem in extra) {
            obj[elem] = extra[elem];
        }
    } else {
        obj.state = 'moderating';
        obj.createdAt = Date.now();
    }
    return obj;
};
console.log(make('Apple'));
console.log(make('Apple', {color: 'green', size: 'large'}));
console.log(make('Apple', {state: 'published'}));
