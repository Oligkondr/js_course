const findWhere = (data, params) => {
    const keys = Object.keys(params);
    for (const book of data) {
        let good = true;
        for (const key of keys) {
            if (book[key] !== params[key]) {
                good = false;
            }
        }
        if (good) {
            return book;
        }
    }
    return null;
};

const books = [
    {
        title: 'Book of Fooos',
        author: 'FooBar',
        year: 1111,
    },
    {
        title: 'Cymbeline',
        author: 'Shakespeare',
        year: 1611,
    },
    {
        title: 'The Tempest',
        author: 'Shakespeare',
        year: 1611,
    },
    {
        title: 'Book of Foos Barrrs',
        author: 'FooBar',
        year: 2222,
    },
    {
        title: 'Still foooing',
        author: 'FooBar',
        year: 3333,
    },
    {
        title: 'Happy Foo',
        author: 'FooBar',
        year: 4444,
    },
];

const params = {
    author: 'Shakespeare',
    year: 1611,
};

console.log(findWhere(books, params));
