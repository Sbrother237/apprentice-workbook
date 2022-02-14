// An isogram is a word that has no repeating letters, consecutive or nonconsecutive. 
// Create a function that takes a string and returns either true or false depending
// on whether or not it's an "isogram".
// Notes: 
//   - Ignore letter case (should not be case sensitive).
//   - All test cases contain valid one word strings.
module.exports = (str) => {

    let lStr = str.toLowerCase();

    for(var i = 0; i <= lStr.length; i++) {
        for(var j = i+1; j <= lStr.length; j++) {
            if(lStr[j] == lStr[i]) {
                return false;
            }
        }
    }
    return true;

}
