var nameVar = 'Masato';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jeff';
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nameConst', nameConst);

//Block Scoping

const fullName = 'Masato Takahashi';
let firstName;

if (fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);