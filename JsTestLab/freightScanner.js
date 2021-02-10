function scan(freightItems){
    let contrabandCount = 0;
    for(item of freightItems)
    {
        if(item == 'contraband')
            ++contrabandCount;
    }
    return contrabandCount;
}
// used by you to test your solution.
const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); // should be 2
// node .\freightScanner.js