describe("#fizz", function() {
  it("integar is divisible by 3 and should return true", function() {
    expect(fizz(9)).toBe(true);
  });
  it("integar is not divisible by 3 and should return false", function() {
    expect(fizz(8)).toBe(false);
  });
});
describe("#buzz", function() {
  it("integar is divisible by 5 and should return true", function() {
    expect(buzz(10)).toBe(true);
  });
  it("integar is not divisible by 3 and should return false", function() {
    expect(buzz(8)).toBe(false);
  });
});

describe("#controller", function() {
  it("integar is divisible by 3 and 5 and should return FizzBuzz", function() {
    expect(controller(15)).toEqual("FizzBuzz");
  });
  it("integar is divisible by 3 and should return Fizz", function() {
    expect(controller(9)).toEqual("Fizz");
  });
  it("integar is divisible by 5 and should return Buzz", function() {
    expect(controller(10)).toEqual("Buzz");
  });
  it("integar not is divisible by 3 or 5 and should return its original number", function() {
    expect(controller(11)).toEqual(11);
  });
});
