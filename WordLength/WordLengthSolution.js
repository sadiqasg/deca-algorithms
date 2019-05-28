function wordLength(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        let len = arr[i].length;
        let format = [arr[i].toLowerCase(), len];
        result.push(format);
    }
    let mapped = new Map(result);
    return mapped;
}

module.exports = wordLength;