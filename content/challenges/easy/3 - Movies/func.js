// You are the cashier at a movie theater
// Only sell tickets under the following condition
// if the customer has enough money for a ticket 8$
// if the movie is not full (true or false)
// if the rating (PG, R) is R and the customer is 17 or older OR a parent is with them

// Return True or False in every situation
module.exports = (customerMoney, isMovieFull, rating, age, isParentWith) => {
    
    if (customerMoney < 8) {
        customerMoney = false;
    } else {
        customerMoney = true;
    }

    if (isMovieFull === true) {
        isMovieFull = false;
    } else {
        isMovieFull = true;
    }

    if (rating === "R") {
        rating = false;
    } else {
        rating = true;
    }

    if (age < 17) {
        age = false;
    } else {
        age = true;
    }

    if (isParentWith) {
        isParentWith = true;
    } else {
        isParentWith = false;
    }


    
    return customerMoney, isMovieFull, rating, age, isParentWith;
};
