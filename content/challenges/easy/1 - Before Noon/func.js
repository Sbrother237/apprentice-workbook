// Check if the time is before noon
// time is in military time 0-24
module.exports = (hour) => {

    if (hour < 12) {
        hour = true;
    } else {
        hour = false;
    }
    return hour;
}