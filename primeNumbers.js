showPrimeNumbers(15);

function showPrimeNumbers(limit) {

  for(let number = 2; number <= limit; number++) {

    if(primeNumber(number)) console.log(number);

  } 

}

function primeNumber(number) {

  for(let divider = 2; divider < number; divider++) {
    if(number % divider === 0)
      return false;
  }
  return true

}