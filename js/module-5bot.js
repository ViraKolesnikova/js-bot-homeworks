//TASK-1
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// console.log(child.name);
// console.log(child.heritage);
// console.log(child);

//TASK-2
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child);

//TASK-3
// const Car = function (brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car('BMW', 'X5', 35000);

// console.log(myCar);

//TASK-4
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const myCar = new Car ({brand:'BMW', model:'X5', price:35000});

// console.log(myCar);


//TASK-5
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// }

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
//   return newPrice
// }

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 36000 })

// console.log(myCar.changePrice(55000))


//TASK-6
// function Storage (items = []) {
//   this.items = items;
// }

// Storage.prototype.getItems = function () {
//   return this.items
// }

// Storage.prototype.addItem = function (newItem) {
//   return this.items.push(newItem)
// }

// Storage.prototype.removeItem = function (item) {
//   for (let i = 0; i < this.items.length; i+=1) {
//     this.items[i] === item ? this.items.splice(i, 1) : false;    
//   }  
// }

// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//TASK-7
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }

// StringBuilder.prototype.getValue = function () {
//   return this.value;
// }

// StringBuilder.prototype.padStart = function (str) {
//   this.value = str + this.value;
// }

// StringBuilder.prototype.padEnd = function (str) {
//   this.value = this.value + str;
// }

// StringBuilder.prototype.padBoth = function (str) {
//   this.value = str + this.value + str;
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

//TASK-8
//об’явлення через клас
// class Car {

// }
// const myCar = new Car;
// console.log(myCar);

//TASK-9
//Об’явлення через клас та конструктор
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
  

//TASK-10

//TASK-11

//TASK-12

//TASK-13

//TASK-14