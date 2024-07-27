const removeFromArray = function (arr, ...elementToRemove) {
  return arr.filter((item) => !elementToRemove.includes(item));
};
console.log(removeFromArray([1, 2, 3, 4, 5, 5], 4, 2));

// Do not edit below this line
module.exports = removeFromArray;
