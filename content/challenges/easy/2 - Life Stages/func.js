// return the stage of life a person is in
// depending on their age
//
// Less than 2 is 'Baby'
// Greater than 2 and less than 13 is 'Kid'
// Greater than 13 and less than 19 is 'Teen'
// Greater than 19 and less than 30 is 'Young Adult'
// Greater than 30 is 'Dead'
module.exports = (age) => {

    if (age < 2) {
        age = "Baby";
    } else if (age > 2 && age < 13) {
        age = "Kid";
    } else if (age > 13 && age < 19) {
        age = "Teen"
    } else if (age > 19 && age < 30) {
        age = "Young Adult";
    } else if (age > 30) {
        age = "Dead";
    }
    return age;

}