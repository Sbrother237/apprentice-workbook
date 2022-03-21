// Write a function that takes a string of one or more words as an argument and returns the same string, 
// but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. 
// Spaces will be included only when more than one word is present.
// Notes:
//   - You can expect a valid string to be provided for each test case.
module.exports = (str) => {

    let newArr = [];
    let tempWord = "";
    let newStr = "";

    for (stringIndex = 0; stringIndex <= str.length; stringIndex++) {
        let char = str[stringIndex];

        if (stringIndex > str.length - 1 || char == ' ') {
            newArr.push(tempWord);
            tempWord = "";
        } else if (char != ' ') {
            tempWord += char
        }

    }

    for (wordIdx = 0; wordIdx < newArr.length; wordIdx++) {

        const word = newArr[wordIdx];

        if (word.length >= 5) {
            let reversedWord = "";
            for (letterIdx = word.length - 1; letterIdx >= 0; letterIdx--) {
                const letter = word[letterIdx];

                reversedWord += letter;
            }
            
            newStr += reversedWord;
            
        } else {
            newStr += word.toString();
        }

        if (wordIdx + 1 != newArr.length) {
            newStr += ' ';
        }

    }
    
    return newStr;

}