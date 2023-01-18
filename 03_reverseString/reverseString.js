const reverseString = function(word) {
    // word = word.split('')
    // word = word.reverse()
    // word = word.join('')
    // return word
    // ** Recursive version
    // if (word === ''){
    //     return ''
    // }
    // return reverseString(word.slice(1)) + word[0]
    // ** iterative version
    reversed = ''

    for(let i = word.length-1; i>=0;i--){
        reversed += word[i];
    }
    return reversed;

};

// Do not edit below this line
module.exports = reverseString;
