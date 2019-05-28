
function stringSplosion(str) {
    //Provice your solution
    if (str.length > 1) {
        var result = '';
        var num = 1;
        for (var i = 0; i < str.length; i++) {
            var sliced = str.slice(0, num);
            result += sliced;
            num++;
        }
        return result;
    }
}

module.exports = stringSplosion;
