// add new elements

  // const numbers = [1,2,3];

  //   //add at begin
  //     numbers.unshift(0);
  //     console.log(numbers);
  //   //add at mid
  //     numbers.splice(1,0,'a');
  //     console.log(numbers);
  //   //add at end 
  //     numbers.push(5);
  //     console.log(numbers);

// find elements (primitives)

  // const numbers = [1,2,3,4];
  // console.log(numbers.indexOf(2));
  // console.log(numbers.lastIndexOf(1));

  // // to see if the number exists
  // console.log(numbers.includes(2));

// find elements (reference)

  // const marks = [
  //   {id: 1, name: 'a'},
  //   {id: 2, name: 'b'},
  //   {id: 3, name: 'c'},
  // ];

  // // javascript find array MDN site

  // const mark = marks.find(function(marks) {
  //   return marks.name === 'a';
  // });

  // console.log(mark);

  // // other form to return the result = arrow functions

  // console.log(marks.find(marks => marks.name === 'a'));

// remove elements

  // const numbers = [1,2,3,4,5,6,7];

  // // remove end number
  // const end = numbers.pop();
  // console.log(end);
  // console.log(numbers);

  // // remove first number
  // const first = numbers.shift();
  // console.log(first);
  // console.log(numbers);

  // // remove mid number
  // const mid = numbers.splice(2,1);
  // console.log(mid);
  // console.log(numbers)

// emptying array

  // let numbers = [1,2,3,4,5,6,7];
  // let others = numbers;

  // first solution
    // numbers = [];

    // console.log(others);

  // Second solution - BETTER FORM IN MY OPINION
    // numbers.length = 0;
    // console.log(numbers);
    // console.log(others);

  // Third solution
  //   numbers.splice(0,numbers.length);
  //   console.log(numbers);
  //   console.log(others);

  // Forth solution - not recommended
    // while (numbers.length > 0)
    //   numbers.pop();

// combine arrays / OPERATOR SPREAD to copy and clone 

  // const first = [{id:1}];
  // const second = [4,5,6];
  // first[0].id = 10;

  // // combined
  // const combined = [...first,...second];
  // console.log(combined);
  // // divided
  // // const divided = combined.slice(1,3);
  // // cloned
  // const cloned = [...combined];
  // console.log(cloned);

  // spread is '...' on const combined


// FOREACH
  // const numbers = [1,2,3,4,5,6,7];

  // // for (number of numbers) 
  // //   console.log(number);

  // numbers.forEach((number, indice) => console.log(number,indice));

// Combining arrays
  // const numbers = [1,2,3,4,5,6,7];

  // const combined = numbers.join('-');
  // console.log(combined);

  // const phrase = 'Good Morning How Are You IM FINE';
  // const result = phrase.split(' ');
  // console.log(result);

  // console.log(result.join('.'));

// DOM IS ALL HTML ON ONE PAGE
