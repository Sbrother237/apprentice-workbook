// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {

    var lower = str.toLowerCase();
    var upper = str.toUpperCase();
    var result = "";

    for (i = 0; i < lower.length; i++) {
        if (!isNaN(lower[i]) || lower[i] != upper[i] || lower[i] === " " || lower[i] === "." || lower[i] === "-") {
            result += str[i]
        }
    }
    return result;
}
