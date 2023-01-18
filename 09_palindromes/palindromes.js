const palindromes = function (word) {
    word = word.toLowerCase();
    let start = 0;
    let end = word.length-1;
    while (start < end){
        // Could probably use the equivalent of unicode value range to determine if it's a letter or not.
        // then all these or operators would be unnecessary as it skips them.
        // honestly we could also probably just reverse the string and do a comparison,
        // but that would require a dictionary/object of punctuation marks and then replace.
        // nvm we could use an object to store the punctuation marks. So if word[i] is in punctuation object.
        if (word[start]===' '|| word[start]==='.'||word[start]===','|| word[start]==='!') {start++;}
        else if (word[end]===' '|| word[end]==='.'||word[end]===','|| word[end]==='!') {end--;}
        else if (word[start] === word[end]){
            start++;
            end--;
        }
        else {return false};
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
