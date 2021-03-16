module.exports.absolute = function (number) {
  return number >= 0 ? number : -number;
  //   if (number >= 0) return number;
  //   return -number;
};

module.exports.greet = function (name) {
  return "Welcome " + name + "!";
};

module.exports.getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};
