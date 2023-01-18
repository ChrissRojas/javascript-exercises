const repeatString = function(word, n) {
    let repeat_word = '';
    if (n<0){
        return 'ERROR'
    }
    for(let i = 0; i < n; i++){
        repeat_word += word
    }
    return repeat_word
};

// Do not edit below this line
module.exports = repeatString;
