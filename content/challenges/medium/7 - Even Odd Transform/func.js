// Create a function that performs an even-odd transform to an array, n times. 
// Each even-odd transformation:
//   1. Adds two (+2) to each odd integer.
//   2. Subtracts two (-2) to each even integer.
module.exports = (arr, n) => {

    let transform = [];
    let even = 0;
    let odd = 0;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            even = arr[i];
            for (e = 0; e < n; e++) {
                even -= 2;
            }
            transform.push(even);
        } else {
            odd = arr[i];
            for (o = 0; o < n; o++) {
                odd += 2;
            }
            transform.push(odd);
        }

    }
    return transform;
}