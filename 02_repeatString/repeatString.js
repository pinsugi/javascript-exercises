const repeatString = function (str, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num == 0) {
    return "";
  } else if (num > 0) {
    return str.repeat(num);
  } else {
    num = Math.floor(Math.random() * 1000);
    return str.repeat(num);
  }
};

// Do not edit below this line
module.exports = repeatString;
