// ----------------------------------------------

  // let age = 5;
  // let height = 180;
  // console.log(age);
  // console.log(height);

// Returning 3 variables 

  // let name = 'Nikolas Mendes';
  // let age = 18;
  // let height = 180;
// ----------------------------------------------

// ----------------------------------------------
// Always use CONST for variables
// Use LET just when value can be changed
// ----------------------------------------------

// ----------------------------------------------
// 
// Primitive Types, Dynamic Types and Objects

  // let name = 'Nikolas'; // String Literal
  // let age = 18; // Number Literal
  // let isApproved = true; // Boolean only True or False
  // let lastname = undefined; // Undefined value
  // let selectedColor = null; // Reset a value

// Object Person
  // let person = {
  //     name: 'Nikolas',
  //     age: 18,
  //     isApproved: true,
  //     lastname: 'Mendes',
  //     selectedColor: null,
  // };

// Returning the object person 
  // console.log(person);

// Command typeof in the console, shows what's the type of the variable like a String, number, etc.
// 
// ----------------------------------------------

// ARRAYS

  // let family = [18, 43, 48];
  // console.log(family.length);
  // console.log(family[0]);

// ----------------------------------------------

// FUNCTIONS

  // let colorSite = "Blue";
  // let age1 = 18;
  // let age2 = 25;
  // let ages = undefined;

  // function resetColor(color, hue) {
  //   colorSite = hue + ' ' + color;
  // };

  // function calculateAge() {
  //   ages = age1 + age2
  // }

  // resetColor("Light", "Red");
  // calculateAge();
  // console.log(colorSite);
  // console.log(ages);

// ----------------------------------------------

// Function Types

// Realize something but dont give back nothing
  // function sayName() {
  //   console.log('Nikolas');
  // }

  // sayName();

// // Do a calculation or operation and return something
  // function multiplicateForTwo(value) {
  //   return value * 2;
  // }

  // // console.log(multiplicateForTwo(5));

  // let result = multiplicateForTwo(5);

  // console.log(result);

// ----------------------------------------------
// OPERATORS
// Aritmetic Operators(Math)
  // let wage = 100;

  // // +, -, *, /, **
  // console.log(wage + wage);
  // console.log(wage - wage);
  // console.log(wage * wage);
  // console.log(wage / wage);
  // console.log(5 ** 5);

  // //  ++, --
  // let age = 18;

  // console.log(++age);
  // console.log(--age);

// ----------------------------------------------

// Assignment Operators

  // let valueGamerKeyboard = 100;
  // // valueGamerKeyboard = valueGamerKeyboard + valueGamerKeyboard;
  // valueGamerKeyboard += valueGamerKeyboard;
  // console.log(valueGamerKeyboard);

// ----------------------------------------------

// Comparacion Operators
// Strict Equality - USE THIS SHAPE BECAUSE WE'LL ALWAYS KNOW THE RIGHT SHAPE
  
  // console.log(1 === 1);
  // console.log('1' === 1);

  // // Loose Equality
  // console.log(1 == 1);
  // console.log('1' == 1);

// ----------------------------------------------

// Ternary Operator
// Have a client, 100 premium, comun
  
  // let points = 200;
  // let type = points > 100 ? 'premium' : 'comun';
  // console.log(type);

// ----------------------------------------------

// Logics Operators
// Logic Operator and (&&)
// returns True if both operands are true

  // console.log(true && true);

  // let ofAge = true;
  // let haveAWorkCard = true;
  // let canApply = ofAge && haveAWorkCard;

  // console.log(canApply);

// Logic Operator or (||)
// Returns true if one of the operands is true

  // let ofAge = false;
  // let haveAWorkCard = false;
  // let canApply = ofAge || haveAWorkCard;

  // console.log('Can Apply: ', canApply);

// Operator Not (!)

  // let rejectedCandidated = !canApply;

  // console.log('Rejected Candidated: ', rejectedCandidated);

// Non Boolean Operators

  // Falsy
    // undefined
    // null
    // 0
    // false
    // ''
    // NaN - not a number 

  // Truthy
    // Any value that is not in one of those examples in the falsy

  // let customColor = 'Red';
  // let standardColor = 'Blue';
  // let perfilColor = customColor || standardColor;

  // console.log(perfilColor);

// If, Else 

  // let hour = 12;

  // if(hour >= 6 && hour < 12) {
  //   console.log('Good Morning');
  // } else if(hour >= 12 && hour <= 18) {
  //   console.log('Good Afternoon');
  // } else {
  //   console.log('Good Night');
  // }

// Switch 

  // let permission = 'Manager';

  // switch(permission) {
  //   case 'Common': 
  //     console.log('Common User');
  //     break;
    
  //   case 'Manager': 
  //     console.log('Manager User');
  //     break;

  //   case 'Director': 
  //     console.log('Director User');
  //     break;

  //   default: 
  //     console.log('Not User');
  // }

// Loops
  // For
    // Minor to Major
      // for(let i = 0; i <= 5; i++) {
      //   // Par
      //     if(i % 2 !== 1) {
      //       console.log(i)
      //     }
      //   // Impar
      //     // if(i % 2 !== 0) {
      //     //   console.log(i)
      //     // }
      // }

    // Major to Minor
      // for(let i = 5; i >= 1; i--) {
      //   // Par
      //     if(i % 2 !== 1) {
      //       console.log(i)
      //     }
      //   // Impar
      //     // if(i % 2 !== 0) {
      //     //   console.log(i)
      //     // }
      // }

  // While - Check First and run later

    // let i = 5;

    // while(i >= 1) {
    //   if(i % 2 !== 0) {
    //     console.log(i)
    //   }
    //   i--;
    // }

  // Do.. While

    // let i = 0;

    // do {
    //   console.log('Typing!', i);
    //   i++; 
    // } while(i < 10);

  // For in

    // const person = {
    //   name: 'Nikolas',
    //   age: 18,
    // };

    // for(let key in person) {
    //   console.log(key, person.name);
    // }

    // const colors = ['Red','Blue','Yellow','Green'];

    // for(let indice in colors) {
    //   console.log(indice, colors[indice]);
    // }

  // For of - USE THIS INSTEAD OF FOR IN

    // const colors = ['Red','Blue','Yellow','Green'];

    // for(let color of colors) {
    //   console.log(color);
    // } 






  








