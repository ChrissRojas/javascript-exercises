const sumAll = function(start,end) {
    // or use built method of Number.isInteger()
    if (start < 0 || end < 0 || !(typeof start == 'number') || !(typeof end == 'number')) return 'ERROR';
    let sum = 0
    if (start > end){
        let temp = start
        start = end
        end = temp
    }
    for(let i=start; i<=end; i++){
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
