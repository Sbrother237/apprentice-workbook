// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with identical elements.
// e.g. [['#', '#'],[2,2,2]], both sub-arrays contain identical elements so this would return 2.
// Notes: 
//   - Single-element arrays count as (trivially) having identical elements.
module.exports = (arr) => {

    let allEqual;
    let result = 0;

    for (i = 0; i < arr.length; i++) {

        allEqual = arr[i].every(val => val === arr[i][0]);

        if (allEqual == true) {
            result++;
        }
    }
    
    return result;

}
