
const firstName="Lorem"
const lastName="Ipsum"
const age=20;

const user={
  firstName:firstName,
  lastName:lastName,
  age:age
}

const userV2={
  firstName,
  lastName,
  age,
  hobby:{
    daily:["dancing","basketball"]
  }
}

console.log(user);
console.log(userV2);

console.table(user);
console.table(userV2);

delete userV2.age;
console.table(userV2);