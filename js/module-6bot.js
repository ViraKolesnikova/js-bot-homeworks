//Task 1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }
//   //Рефакторинг
//   orderedItems.forEach((item)=>{totalPrice+=item})

//   // Пиши код выше этой строки
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));


//Task 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   })
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//Task 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//         commonElements.push(element)
//       }
//     })
  
//     return commonElements;
//     // Пиши код выше этой строки
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

//Task 4
//Синтаксис струлочных функций
// const calculateTotalPrice = (quantity, pricePerItem) => {
 
//   return quantity * pricePerItem;
// }
// console.log(calculateTotalPrice(5, 100));


//Task 5
// const calculateTotalPrice = (quantity, pricePerItem) => 
// quantity * pricePerItem;

//Task 6
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => totalPrice += item);

//   return totalPrice;
// }

// console.log(calculateTotalPrice([164, 48, 291]));

//Task 7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
// }

//Task 8
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return commonElements;
// }

//Task 9
// const changeEven = (numbers, value) => {
//     // Пиши код ниже этой строки
//   const newArray = [];
//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       number = number + value;
//     }    
//     newArray.push(number);
//   })
//    return newArray
//     // Пиши код выше этой строки
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));

//Task 10
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths)

//Task 11
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
    
// const titles = books.map(book => book.title);
// console.log(titles);

//Task 12
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
 
//   const genres = books.flatMap(book => book.genres);
// console.log(genres)

//Task 13
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

// const getUserNames = users => {
// const userNames = users.map(user => {
//  return user.name;    
// })
// // console.log(userNames);
//   return userNames;
// };


//Task 14
// const getUserEmails = users => {
//   const userEmails = users.map(user => {
//     return user.email;
//   })  
//     return userEmails;
// };
// console.log(getUserEmails(users));

//Task 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 > 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

//Task 16
// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
//   console.log(allGenres);
//   const uniqueGenres = allGenres.filter((genre, index, allGenres) => allGenres.indexOf(genre)=== index);
// console.log(uniqueGenres);

//Task 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);

//Task 18
// const getUsersWithEyeColor = (users, color) => {
//  const usersEyeColor = users.filter(user => user.eyeColor === color);
//   return usersEyeColor;
// };

// getUsersWithEyeColor(users, brown);
// console.log(usersEyeColor);

//Task 19
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const usersWithAge = users.filter(user => {
//     user.age >= minAge && user.age <= maxAge
//   })

//   return usersWithAge;
// };

// getUsersWithAge(users, 20, 30);


//Task 20
// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName));
// };

// console.log(getUsersWithFriend(users, 'Aisha Tran'));

//Task 21
// const getFriends = (users) => {
// const allFriends = users.flatMap(user => user.friends);
//   console.log(allFriends);
//   const uniqeFriends = allFriends.filter((friend, index, allFriends) => {
//     return allFriends.indexOf(friend) === index
//   })

// return uniqeFriends;
// };

// console.log(getFriends(users))

//Task 22
// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive) 
// };

//Task 23
// const getInactiveUsers = (users) => {
//    return users.filter(user => !user.isActive) 
// };

//Task 24
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);


//Task 25
// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email) 
// };

// console.log(getUserWithEmail(users, 'careybarr@nurali.com'));

//Task 26
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every(elem => elem % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(elem => {elem % 2 !== 0});

// const eachElementInSecondIsEven = secondArray.every(elem => elem % 2 === 0);;
// const eachElementInSecondIsOdd = secondArray.every(elem => elem % 2 !== 0);
// ;

// const eachElementInThirdIsEven = thirdArray.every(elem => elem % 2 === 0);;
// const eachElementInThirdIsOdd = thirdArray.every(elem => elem % 2 !== 0);
// ;

//Task 27
// const isEveryUserActive = (users) => {
//   return users.every(user => user.isActive)
// };

//Task 28
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 !==0);

// const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);;
// const anyElementInSecondIsOdd = secondArray.some(elem => elem % 2 !==0);;

// const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);;
// const anyElementInThirdIsOdd = thirdArray.some(elem => elem % 2 !==0);;
// console.log(anyElementInFirstIsEven);
// console.log(anyElementInFirstIsOdd);
// console.log(anyElementInSecondIsEven);
// console.log(anyElementInSecondIsOdd);
// console.log(anyElementInThirdIsEven);
// console.log(anyElementInThirdIsOdd);



//Task 29
// const isAnyUserActive = users => {
//    return users.some(user => user.isActive)
// };

//Task 30
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((value, playtime)=>{return value + playtime}, 0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime);
// console.log(averagePlayTime);

//Task 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки
// const averagePlaytime = players.map(player => player.playtime / player.gamesPlayed);
// console.log(averagePlaytime);
// const totalAveragePlaytimePerGame = averagePlaytime.reduce((total, time) => { return total + time }
// );
// console.log(totalAveragePlaytimePerGame);

//Task 32
// const calculateTotalBalance = users => {
//    return users.reduce((total, user) => {
//      return total + user.balance       
//    }, 0)
// };

//Task 33
// const getTotalFriendCount = users => {
//   return users.reduce((value, user) => {return value + user.friends.length}, 0) 
// };
// console.log(getTotalFriendCount(users));

//Task 34
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

//Task 35
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((firsEl, secondEl) => firsEl-secondEl);

// const descendingReleaseDates = [...releaseDates].sort((firsEl, secondEl) => secondEl-firsEl);

//Task 36
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a, b) =>  a.localeCompare(b));
  
//   const authorsInReversedOrder = [...authors].sort((a, b) =>  b.localeCompare(a));

//Task 37
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstEl, secondEl) => firstEl.author.localeCompare(secondEl.author));

// const sortedByReversedAuthorName = [...books].sort((firstEl, secondEl) => secondEl.author.localeCompare(firstEl.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating-b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);
// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

//Task 38
// const sortByAscendingBalance = users => {
//   return users.sort((firstEl, secondEl) => firstEl.balance - secondEl.balance) 
// };

//Task 39
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstEl, secondEl) => secondEl.friends.length - firstEl.friends.length) 
// };
// console.log(sortByDescendingFriendCount(users));

//Task 40
// const sortByName = users => {
//   return [...users].sort((firstEl, secondEl) => firstEl.name.localeCompare(secondEl.name)) 
// };

//Task 41
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
// .map(book => book.author)
// .sort((a, b) => a.localeCompare(b));
// console.log(names);

//Task 42
// const getNamesSortedByFriendCount = users => {
//    return [...users]
//      .sort((a, b) => a.friends.length - b.friends.length)
//      .map(user => user.name)
// };

//Task 43
// const getSortedFriends = users => {
//   const result = [...users].flatMap(user => user.friends)
//   .filter((elem, index, result) => result.indexOf(elem) === index)
//   .sort((firstEl, secondEl) => firstEl.localeCompare(secondEl));
//   return result;
// };

// console.log(getSortedFriends(users));

//Task 44
// const getTotalBalanceByGender = (users, gender) => {
//   return users.filter(user => user.gender === gender)
//   .reduce((totalBal, user) => {return totalBal + user.balance}, 0);
  
// };
