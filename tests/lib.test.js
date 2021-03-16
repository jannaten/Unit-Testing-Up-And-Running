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

describe("get currencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    // proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    // ideal way
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));

    // Too general
    // expect(result).toBeDefined();
    // expect(result).not.toBeNull();

    // Too specific
    // expect(result[0]).toBe('USD');
    // expect(result[1]).toBe('AUS');
    // expect(result[2]).toBe('EUR');
    // expect(result.length).toBe(3);
  });
});
// node -v = 14.16.0 npm -v 7.6.2
