// Write a function that takes a string, and returns a new string with any duplicate consecutive letters removed.
// Notes:
//   - Final strings won't include words with double letters (e.g. "passing", "lottery").

module.exports = (word) => {

    let last = "";
    let result = "";

    for (i = 0; i < word.length; i++) {
        let char = word.charAt(i);

        if (char !== last) {
            result += char;
            last = char;
        }
    }

    return result;
    
}