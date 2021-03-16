const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

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
  it("Should throw error if username is falsy", () => {
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

describe("Fizz Buzz ", () => {
  it("Should throw error if input is not number", () => {
    expect(() => lib.fizzBuzz("a")).toThrow();
    expect(() => lib.fizzBuzz(null)).toThrow();
    expect(() => lib.fizzBuzz(undefined)).toThrow();
    expect(() => lib.fizzBuzz({})).toThrow();
  });

  it("should return fizz buzz if input is divisible by 3 and 5", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return fizz buzz if input is divisible by 3", () => {
    const result = lib.fizzBuzz(9);
    expect(result).toBe("Fizz");
  });

  it("should return fizz buzz if input is divisible by 5", () => {
    const result = lib.fizzBuzz(25);
    expect(result).toBe("Buzz");
  });

  it("should return fizz buzz if input isn't divisible by 3 or 5", () => {
    const result = lib.fizzBuzz(1);
    expect(result).toBe(1);
  });
});

describe("Apply Discount", () => {
  it("Should apply 10% discount if the customer has more than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      console.log("This is a mock function");
      return { id: customerId, points: 20 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });
});

describe("Notify Customer", () => {
  it("Should send an email to the customer", () => {
    db.getCustomerSync = function (customerId) {
      return { email: "a" };
    };
    let mailSent = false;
    mail.send = function (email, message) {
      mailSent = true;
    };
    lib.notifyCustomer({ customerId: 1 });
    expect(mailSent).toBe(true);
  });
});
// node -v = 14.16.0 npm -v 7.6.2
