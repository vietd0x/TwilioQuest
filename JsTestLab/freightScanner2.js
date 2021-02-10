function scan(freightItems) {
    let contrabandIndexes = [];
    freightItems.forEach((item, index) => {
        if(item == "contraband")
            contrabandIndexes.push(index);
    });
    return contrabandIndexes;
}
// used by you to test your solution.
const indexes = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Contraband Indexes: ' + indexes); // should be [1, 4]
// node .\freightScanner2.js