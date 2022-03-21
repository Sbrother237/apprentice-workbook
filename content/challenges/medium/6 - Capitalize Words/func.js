// Create a function that takes a string as an argument and converts the first character of each word to uppercase. 
// Return the newly formatted string.
// Notes: 
//   - You can expect a valid string for each test case.
module.exports = (str) => {

    let newArr = [];
    let tempWord = "";
    let newStr = "";

    for (strIdx = 0; strIdx <= str.length; strIdx++) {
        let char = str[strIdx];

        if (strIdx > str.length - 1 || char == ' ') {
            newArr.push(tempWord);
            tempWord = "";
        } else if (char != ' ') {
            tempWord += char
        }

    }

    for (wordIdx = 0; wordIdx < newArr.length; wordIdx++) {
        let word = newArr[wordIdx];
        word = word[0].toUpperCase() + word.substr(1);
        newStr += word.toString();
        
        if (wordIdx + 1 != newArr.length) {
            newStr += ' ';
        }

    }
    

    return newStr;

}