function scanAndFilter(freightItems, forbiddenString) {
    let filteredItems = [];
    filteredItems = freightItems.filter(item =>item != forbiddenString);
    return filteredItems;
}
// used by you to test your solution.
const filtered = scanAndFilter(
    ['dog', 'ray gun', 'cat', 'zippers', 'ray gun'],
    'ray gun'
);
console.log('Filtered Items');
console.log(filtered); // should be ['dog', 'cat', 'zippers']

const cargo = ['apples', 'ray guns', 'oranges', 'tacos', 'ray guns'];
const filteredCargo = scanAndFilter(cargo, 'ray guns');
console.log(filteredCargo);// filteredCargo should now be ['apples', 'oranges', 'tacos']
// node .\freightFilter.js