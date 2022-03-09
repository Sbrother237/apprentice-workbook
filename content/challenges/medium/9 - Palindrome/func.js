// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {

    let lowerCaseStr = str.toLowerCase();
    let forwards = "";
    let backwards = "";
    let last = "";

    for (front = 0; front < lowerCaseStr.length; front++) {
        let frontChar = lowerCaseStr[front];

        forwards += frontChar;

        last = frontChar;
    }

    for (back = lowerCaseStr.length - 1; back >= 0; back--) {
        let backChar = lowerCaseStr[back];

        backwards += backChar;

        last = backChar;
    }

    if (forwards === backwards) {
        return true;
    } else {
        return false;
    }

}