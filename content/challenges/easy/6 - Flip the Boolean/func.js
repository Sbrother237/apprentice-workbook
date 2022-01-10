// Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given
module.exports = (bool) => {
    if (bool) {
        return false;
    } else if (!bool) {
        return true;
    } else if (bool && !bool) {
        return "boolean expected"
    }
};
