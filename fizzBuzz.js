// divisible by 3 = fizz
// divisible by 5 = Buzz
// divisible by 3 and 5 = fizzbuzz
// not divisible by 3 and 5 = entry
// not a number = 'Not is a number'


const result = fizzBuzz(30);
console.log(result);

function fizzBuzz(entry) {
  if (typeof entry !== 'number') 
    return 'Not is a number';
  else if ((entry % 3 === 0) && (entry % 5 === 0))
    return 'FizzBuzz';
  else if (entry % 3 === 0)
    return 'Fizz';
  else if (entry % 5 === 0)
    return 'Buzz';
  else if (entry % 3 !== 0 && entry % 5 !== 0)
    return entry;
}