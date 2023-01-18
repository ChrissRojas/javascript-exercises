const fibonacci = function(num) {
    //tabulation method PURR
    num = parseInt(num);
    x = 0;
    y = 1;
    a = x+y;
    if (num< 0){
        return 'OOPS';
    }
    else if (num==0||num==1){
        return num;
    }
    for (let i = 0;i<num;i++){
        x=y;
        y=a;
        a=x+y;
    }
    return x;

};

// Do not edit below this line
module.exports = fibonacci;
