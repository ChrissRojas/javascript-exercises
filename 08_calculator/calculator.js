const add = function(n1,n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
  return n1-n2;
};

const sum = function(arr) {
  let sumOfNums = 0
	if(!arr.length) return 0;
  else if(arr.length === 1) return arr[0];
  else {
    for(let i = 0; i<arr.length; i++){
      sumOfNums += arr[i];
    }
  }
  return sumOfNums;
};

const multiply = function(...args) {
  let nums = args[0];
  let product = 1;
  for(let i =0; i<nums.length;i++){
    product = nums[i] * product;
  }
  return product;
};

const power = function(num, pow) {
  // IM just going to use the built in math.pow cuz i can't be bothered.
  return Math.pow(num, pow);
};

const factorial = function(num) {
  let fact = 1;
	if (num == 0 || num == 1){
    return 1;
  }
  for(let i = 1; i<=num;i++){
    fact = fact * i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
