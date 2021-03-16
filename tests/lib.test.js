const lib = require("../lib");

describe("absolute", () => {
  test("should return a postive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  test("should return a postive number if input is negetive", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  test("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Mosh");
    // expect(result).toBe("Welcome Mosh"); //this is bad conding cause its easy to break
    expect(result).toMatch(/Mosh/);
    expect(result).toContain("Mosh");
  });
});
// node -v = 14.16.0 npm -v 7.6.2
