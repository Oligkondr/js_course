const data = {
    user: 'ubuntu',
    hosts: {
        0: {name: 'web1'},
        1: {name: 'web2', null: 3, active: false},
    },
};
const get = (obj, keys) => {
    let myObj = obj;
    for (const key of keys) {
        if (Object.hasOwn(myObj, key)) {
            myObj = myObj[key];
        } else {
            return null;
        }
    }
    return myObj;
};
