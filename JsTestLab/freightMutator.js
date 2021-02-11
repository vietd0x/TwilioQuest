function mutate(freightItems) {
    let mutatedItems = [];
    mutatedItems = freightItems.map(item => item.toUpperCase());
    return mutatedItems;
}
const mutated = mutate(['dog', 'ray gun', 'cat']);
console.log('Mutated Items');
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']

const cargo = ['apples', 'ray guns', 'oranges'];
const mutatedCargo = mutate(cargo);
console.log(mutatedCargo);
// mutatedCargo should now be ['APPLES', 'RAY GUNS', 'ORANGES']