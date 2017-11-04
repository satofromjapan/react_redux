// const person = {
//   name: "Masato",
//   age: 32,
//   location: {
//     city: 'Sunnyvale',
//     temp: 70
//   }
// };


// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`)

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); //if no name, default to sefl-published