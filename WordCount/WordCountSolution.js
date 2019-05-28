function wordCount(arrayOfStrings) {
    let result = {};
    for (let i in arrayOfStrings) {
        let currentVal = arrayOfStrings[i];
        if (!result[currentVal]) {
            result[currentVal] = 1; 
        } else {
            result[currentVal]++;
        }
    }
    return result;
}

module.exports = wordCount;