// Create a function that takes a word and returns true if the word has two consecutive identical letters.
module.exports = (word) => {

    let last = "";

    for(i = 0; i < word.length; i++) {
        let char = word[i];

        if (char == last) {
            return true;
        }
        last = char;
    }
    return false;
};