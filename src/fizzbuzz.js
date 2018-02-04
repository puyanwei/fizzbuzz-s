function fizz(number) {
  return number % 3 == 0;
}

function buzz(number) {
  return number % 5 == 0;
}

function fizzbuzz(number) {
  return fizz(number) && buzz(number);
}

function controller(number) {
  if (fizzbuzz(number)) {
    return "FizzBuzz";
  }
  if (fizz(number)) {
    return "Fizz";
  }
  if (buzz(number)) {
    return "Buzz";
  } else {
    return number;
  }
}
