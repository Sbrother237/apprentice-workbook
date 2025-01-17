// Create a function that takes in an initial word and filters out an array to contain words that start with the same letters as the initial word.
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.

module.exports = (initial, words) => {

    let result = [];

    for (i = 0; i < words.length; i++) {

        if (words[i].startsWith(initial)) {
            result.push(words[i]);
        }

    }
    return result;
}