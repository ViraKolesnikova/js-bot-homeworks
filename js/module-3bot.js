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

//TASK 21
