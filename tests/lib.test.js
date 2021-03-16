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

describe("get product", () => {
  it("Should return the product with the given id", () => {
    const result = lib.getProduct(1);
    // expect(result).toBe({ id: 1, price: 10 }); //This will fail because the code will try to mathc two objects in memory
    // expect(result).toEqual({ id: 1, price: 10 }); // This is pass only if all properties are matched with the root object
    expect(result).toMatchObject({ id: 1, price: 10 }); // This will pass regardless even if you have more properties in the objects
    expect(result).toHaveProperty("id", 1);
  });
});

describe("register user", () => {
  it("Should throw if username is falsy", () => {
    const args = [null, undefined, "", NaN, 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });
  it("Should return a user object if valid username is passed", () => {
    const result = lib.registerUser("Jannaten");
    expect(result).toMatchObject({ username: "Jannaten" });
    expect(result.id).toBeGreaterThan(0);
  });
});
// node -v = 14.16.0 npm -v 7.6.2
