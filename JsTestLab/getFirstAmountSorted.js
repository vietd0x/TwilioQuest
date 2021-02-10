function getFirstAmountSorted(inputArray, numberOfItems){
    return inputArray.sort().slice(0, numberOfItems);
}

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); // << should print out ['apple', 'bat']
// node .\getFirstAmountSorted.js