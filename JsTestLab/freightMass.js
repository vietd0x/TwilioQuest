function calculateMass(freightItems) {
    let totalMass = 0;
    totalMass = freightItems.reduce((sum, str)=> sum + str.length, 0);
    return totalMass;
}
const mass = calculateMass(['dog', 'donkey', 'cat']);
console.log('Total mass of items is ' + mass); // should be 12

const cargo = ['cat', 'dog', 'bird'];
const massCargo = calculateMass(cargo);
console.log(massCargo); // mass should now be 10