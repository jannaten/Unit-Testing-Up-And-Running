const lib = require("../lib");

test("absolute - should return a postive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

test("absolute - should return a postive number if input is negetive", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

test("absolute - should return 0 if input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0);
});

// node -v = 14.16.0 npm -v 7.6.2
