//TASK 6
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

//TASK 7
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Jamaica",
//   city: "Kingston",
// }
// console.log();

//TASK 8
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,

//   // Change code above this line
// };
// console.log(image);
// console.log(product.name);
// console.log(product.price);

//TASK 9
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",


//   // Change code above this line
// };



//TASK 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const element in apartment) {
//   // console.log(apartment[element]);
//   keys.push(element)
//   values.push(apartment[element])
// }
// console.log(keys);
// console.log(values);


//TASK 11
// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }

//   // Change code above this line
// }
// console.log(values);

//TASK 12
// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for(const element in object) {
//   if (object.hasOwnProperty(element)) {
//     propCount +=1;
//   }
//  }
//   // Change code above this line
//   return propCount;
// }

//TASK 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// // console.log(keys);
// for(let key of keys) {
  
//   values.push(apartment[key])
// }
// console.log(values);
// console.log(keys);


//TASK 14
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   const keys = Object.keys(object)
//   for (const key of keys) {
//      propCount += 1;
    
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

//TASK 15
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(values);

//TASK 16
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
  
//   const salaryArray= Object.values(salaries);
//   console.log(salaryArray);

//   for (const value of salaryArray) {
//     console.log(value);
//     totalSalary += value;
//   }
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))



//TASK 17
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//   console.log(color);
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors);
// console.log(rgbColors);


//TASK 18
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const product of products) {
//     // console.log(product);
//     if (product.name === productName) {
//       return product.price;      
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("jhyfys"))


//TASK 19
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// let propNameValues = [];
// function getAllPropValues(propName) {
//   for (let product of products) {
//     if (product.hasOwnProperty(propName)) {
//       propNameValues.push(product[propName]);
//     }
//   }
//   return propNameValues
// }
// console.log(getAllPropValues("price"));


//TASK 20
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (let product of products) {
//      console.log(product);
//     totalPrice = productName === product.name ? product.price*product.quantity : totalPrice;
//   }
//   return totalPrice
// }
// console.log(calculateTotalPrice('Grip'));

//TASK 21
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, today , tomorrow} = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// console.log(meanTemperature);


//TASK 22
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line

// const {yesterday, 
//        today, 
//        tomorrow, 
//        icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;


// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

//TASK 23

//TASK 24
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const {hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

//TASK 25
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// const {
//   today: {
//     high: highToday,
//     low: lowToday,
//     icon: todayIcon =  "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",},
   
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   }
// } = forecast;


//TASK 26
// function calculateMeanTemperature(forecast) {
//   const {
//     today: {
//       low: todayLow, 
//       high: todayHigh,
//     }, 
//     tomorrow: {
//       low: tomorrowLow, 
//       high: tomorrowHigh,
//     } 
//   }= forecast;
  
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


//TASK 27
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//TASK 28
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);


//TASK 29
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

//TASK 30
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return {completed, category, priority, ...data}
//   // Change code above this line
// }
// console.log(makeTask({ category: "Finance", text: "Take interest" }))

//TASK 31
// function add(...args) {
//   let totalArgs = 0;
//   for (let arg of args) {
//     totalArgs += arg;
//   }
//   return totalArgs
// }
// console.log(add(23, 5, 6, 18));


//TASK 32
// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(arg > firstArg) {
//       total += arg;
//     }    
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(15, 32, 6, 13, 19, 8))

//TASK 33
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
//   for (let arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg)
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//TASK 34
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`
//   }
//   // Change code above this line
// };


//TASK 35
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
// 	const oldNameIndex = this.books.indexOf(oldName);
//     this.books.splice(oldNameIndex, 1, newName)
	
	
//     // Change code above this line
//   },
// };


//TASK 36


//TASK 37
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   }
//   // Change code above this line
// };


//TASK 38
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName)
//     // Change code above this line
//   },
// };


//TASK 39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionNameIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionNameIndex, 1);
//     // Change code above this line
//   },
// };


//TASK 40
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//    const oldNameIndex = this.potions.indexOf(oldName);
//    this.potions.splice(oldNameIndex, 1, newName)
//     // Change code above this line
//   },
// };


//TASK 41

