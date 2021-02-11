function calculatePower(powerSettings) {
    let totalPower = 0;
    totalPower = powerSettings.reduce((sum, val)=> sum + val * 2,0);
    return totalPower;
}
const laserPower = calculatePower([1, 3, 8]);
console.log('Required laser power is ' + laserPower); // should be 24