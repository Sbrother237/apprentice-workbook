// Write a function that determines if a string is a palindrome.
// Notes: 
// An empty string counts as a palindrome.
module.exports = (str) => {

    let re = /[\W]/g;

    let lowCaseStr = str.toLowerCase().replace(re, '');

    let reverseStr = lowCaseStr.split('').reverse().join('');

    return reverseStr === lowCaseStr;

}