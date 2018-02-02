describe("#fizz", function() {
  it("integar is divisible by 3", function() {
    expect(fizz(9)).toEqual("Fizz");
  });
  it("integar is not divisible by 3", function() {
    expect(fizz(8)).toEqual(8);
  });
});

describe("#buzz", function() {
  xit("integar is divisible by 5", function() {
    expect(buzz(10).toEqual("Buzz"));
  });
});
