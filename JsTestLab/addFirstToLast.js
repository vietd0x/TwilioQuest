function addFirstToLast(inputArray){
    if(inputArray.length == 0)
        return "";
    return inputArray[0] + inputArray[inputArray.length - 1];
}
//
// command line with Node.js
console.log(addFirstToLast(['first', 'second', 'third']));
console.log(addFirstToLast(['golden', 'terrier']));
console.log(addFirstToLast(['cheerio']));
console.log(addFirstToLast([]));