// argument objects - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
}

console.log(add(55, 1, 1001))

// this keyword - no long bound

const user = {
  name: 'Masato',
  cities: ['Tokyo', 'San Francisco', 'Sunnyvale'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => this.multiplyBy * num);
  }
};

console.log(multiplier.multiply());