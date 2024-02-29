const garden = [
    {
        name: 'tree',
        fruits: [
            {name: 'apple', color: 'green'},
            {name: 'orange', color: 'blue'},
        ],
    },
];
const gardenFinder = garden => garden
  .map(({fruits}) => fruits)
  .flat()
  .filter(({color}) => color === 'green');

console.log(gardenFinder(garden));
