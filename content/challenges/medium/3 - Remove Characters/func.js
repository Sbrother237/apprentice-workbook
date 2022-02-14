// Create a function that takes a string, removes all "special" characters (e.g. !, @, #, $, %, ^, &, \, *, (, )) and 
// returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.
module.exports = (str) => {

    const removeChar = str.replace(/[^a-zA-Z0-9-_. ]/g, '');

    return removeChar;
}
