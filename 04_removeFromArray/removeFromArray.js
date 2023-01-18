const removeFromArray = function(...args) {
    let arr = args[0];
    for(let i =1; i< args.length;i++){
        let to_remove = arr.indexOf(args[i]);
        if (to_remove > -1 && arr[to_remove]===args[i]){
            arr.splice(to_remove,1)
        }
    }
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
