//Task 1
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }
// console.log(checkAge(18))

//Task 2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   } 
  
//   return "Access denied, wrong password!";
// }
// console.log(checkPassword("jquesmyjam"))
// Change code above this line


//Task 3
// function checkStorage(available, ordered) {
//   // Change code below this line
  
//   if (ordered === 0) {
//     return "Your order is empty!";
//   } 
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   } 
  
//   return "The order is accepted, our manager will contact you";
  
//   // Change code above this line
// }
// console.log(checkStorage(5, 0))

//Task 4
// Change code below this line
// const fruits = ["apple", "plum", "pear", "orange"];

//Task 5
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(lastElement)

//Task 6
// const fruits = ["apple", "plum", "pear", "orange"];

// // Write your code under this line
// fruits[1] = "peach";
// fruits[3] = "banana";

//Task 7
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.table(fruits)

//Task 8
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];
// console.log(lastElementIndex)
// console.log(lastElement)


//Task 9
// function getExtremeElements(array) {
 
//   const firstElement = array[0];
//   const lastElement = array[array.length-1];
//   const newMassive = [firstElement, lastElement];

//   return newMassive
// }
// console.log(getExtremeElements([1, 2, 3, 4]));

//Task 10
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//  words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }


//Task 11
// function calculateEngravingPrice(message, pricePerWord) {
 
//   const engravingWords = message.split(" ");
//   const totalPrice = engravingWords.length * pricePerWord;

//   return totalPrice; 
// }
// console.log(calculateEngravingPrice("Web-development is creative work", 20))

//Task 12
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }

//Task 13
// const title = "Ten secrets of JavaScript";
// const toLowerCaseTitle = title.toLowerCase();
// console.log(toLowerCaseTitle);
// const splitTitle = toLowerCaseTitle.split(" ");
// console.log(splitTitle);
// const slugTitle = splitTitle.join("-");
// console.log(slugTitle)

//Task 14
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

// console.log(nonExtremeEls)

//Task 15
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

//Task 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
// let newArray = firstArray.concat(secondArray);
//   if(newArray.length>maxLength) {
//     newArray = newArray.slice(0, maxLength)
//   }
  
//   return newArray

//     // Change code above this line
//   }
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4))

//Task 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }

//Task 18
// function calculateTotal(number) {
//  // Change code below this line
//  let total = 0;
  
//   for (let i = 1; i <= number; i += 1) {
    
//     total+=i;
//   }
  
//  return total; 
// }
// console.log(calculateTotal(18))

//Task 19
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

//Task 20
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//  for(let good of order) {
//   total+=good;
//  }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

//Task 21
// let string = "May the force be with you";

// const myArray = string.split(" ");
// console.log(myArray)
// let theLongestWord = myArray[0];

// for (let i = 0; i < myArray.length; i += 1) {
//   if(myArray[i].length>theLongestWord.length) {
//     theLongestWord = myArray[i];
//   } 
// }
// console.log(theLongestWord)


//Task 22
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// for(let i = min; i <= max; i += 1) {
//   numbers.push(i);
// }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(3, 9))

//Task 23
// function filterArray(numbers, value) {
//   const biggerIntArray = [];
//   for(let i = 0; i < numbers.length; i += 1) {
    
//     if(numbers[i] > value) {
//       biggerIntArray.push(numbers[i]);
//     }
//     continue;
// }
     
//  return biggerIntArray
  
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38))

//Task 24
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit("apple"))

//Task 25
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   const commonElemArray = [];
//   for(let i=0; i < array1.length; i+=1) {
    
//   if(array2.includes(array1[i])) {
//     commonElemArray.push(array1[i]);
//   }
//  }
//   return commonElemArray
//  // Change code above this line
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//Task 26
// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let good of order) {
//     console.log(good);
//     total += good;
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

//Task 27
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (let number of numbers) {
    
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;  
// }


//Task 28
// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;

//Task 29
// function getEvenNumbers(start, end) {
//   const evenNumbers = [];
//   for (let i = start; i<=end; i+=1) {
//     if(i % 2 === 0) {
//       evenNumbers.push(i)
//     }
//   }
//   return evenNumbers;
// }
// console.log(getEvenNumbers(3, 22));

//Task 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
// }
// console.log(number);

//Task 31
// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//        return i;      
//     }
//   }
// }
// console.log( findNumber(32, 45, 5));

//Task 32
// function includes(array, value) {
 
//   for (let element of array) {
//     if (element === value) {
//       return true;
//       break;
//     }
//   }  
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 1))