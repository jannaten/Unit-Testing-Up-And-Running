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

module.exports.getProduct = function (productId) {
  return { id: productId, price: 10, category: "cats" };
};

module.exports.registerUser = function (username) {
  if (!username) throw new Error("Username is required!");
  return { id: new Date().getTime(), username };
};
