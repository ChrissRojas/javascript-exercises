const findTheOldest = function(arr) {
    // I could probably use reduce here but reduce confused me so, I'll need to look into it more.
    let oldest = 0;
    for(let i = 1; i<arr.length; i++){
        if (calcAge(arr[i].yearOfBirth,arr[i].yearOfDeath) > calcAge(arr[oldest].yearOfBirth,arr[oldest].yearOfDeath)){
            oldest = i;
        }
    }
    return arr[oldest]
};

const calcAge = (birth_year, death_year) => {
    if(!death_year) {death_year = new Date().getFullYear()};
    return death_year - birth_year;
}

// Do not edit below this line
module.exports = findTheOldest;
