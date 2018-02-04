describe("#divisibleByIntegar", function() {
  it("integar is divisible by 3 and should return Fizz", function() {
    expect(divisibleByIntegar(9, 3, "Fizz")).toEqual("Fizz");
  });
  it("integar is not divisible by 3 and should return its original number", function() {
    expect(divisibleByIntegar(8, 3, "Fizz")).toEqual(8);
  });
  it("integar is divisible by 5 and should return Buzz", function() {
    expect(divisibleByIntegar(10, 5, "Buzz")).toEqual("Buzz");
  });
  it("integar is not divisible by 5 should return its original number", function() {
    expect(divisibleByIntegar(11, 5, "Buzz")).toEqual(11);
  });

  describe("#controller", function() {
    it("integar is divisible by 3 and 5 and should return FizzBuzz", function() {
      expect(controller(15)).toEqual("FizzBuzz");
    });
    it("integar not is divisible by 3 or 5 and should return its original number", function() {
      expect(controller(11)).toEqual(11);
    });
  });
});
