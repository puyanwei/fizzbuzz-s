function divisibleByIntegar(number, divisibleBy, result) {
  if (number % divisibleBy == 0) {
    return result;
  } else {
    return number;
  }
}

function controller(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    divisibleByIntegar(number, 3, "Fizz");
  } else if (number % 5 == 0) {
    divisibleByIntegar(number, 5, "Buzz");
  } else {
    return number;
  }
}
