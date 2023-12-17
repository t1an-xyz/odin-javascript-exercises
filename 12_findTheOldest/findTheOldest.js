const findTheOldest = function(people) {
    return people.reduce((oldest, curr) => {
        let currYear = (new Date()).getFullYear();
        let thisAge = currYear - curr.yearOfBirth;
        if ("yearOfDeath" in curr) {
            thisAge = curr.yearOfDeath - curr.yearOfBirth;
        }
        let oldAge = currYear - oldest.yearOfBirth;
        if ("yearOfDeath" in oldest) {
            oldAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        return thisAge > oldAge ? curr : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
