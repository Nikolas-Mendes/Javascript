// Example 1

  // let number1 = 7;
  // let number2 = 5;

  // if(number1 > number2) {
  //   console.log('Bigger Number');
  // } else {
  //   console.log('Smaller Number')
  // }

// Example 2

  let valueBigger = max(7,9);
  console.log(valueBigger);

  // First Way
    // function max(number1, number2) {
    //   if(number1 > number2) 
    //     return 'Number: ' + number1 + ' is bigger than ' + number2; 
    //   else if(number1 === number2) {
    //     return 'Its the same number';
    //   }
    //   else return 'Number: ' + number2 + ' is bigger than ' + number1;
    // }

  // Second Way
    function max(number1, number2) {
      return number1 > number2 ? number1 : number2;
    }

