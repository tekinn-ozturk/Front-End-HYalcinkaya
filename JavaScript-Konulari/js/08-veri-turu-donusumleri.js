let isActive =true;
let firstName ="Beyza";
let year =2023;



//typeof()
isActive= false;
console.log("isActive",isActive,typeof(isActive));
console.log("firstName",firstName,typeof(firstName));
console.log("year",year,typeof(year));
console.log("year bilgisi number mi ?",typeof(year)==="number");


let age = 35;
let addToAge ="1";
let result = age + addToAge;

console.log("age+addToAge =",result); //351
console.log("result tipi:",typeof(result));

console.log(typeof(result),typeof(parseInt(result)));

let randomType= "11Abc";
console.log("randomType:",typeof(randomType));
console.log("randomType:",typeof(parseInt(randomType)));

let randomType2="AbcD";
console.log("randomType2:",typeof(randomType2));
console.log("randomType2:",typeof(parseInt(randomType2)));
console.log(1+parseInt(randomType2));

//Number()
console.log(Number("11a"));
console.log(Number("11"));
console.log("1+Number(randomType)",1+Number(randomType));
console.log("1+Number(randomType2)",1+Number(randomType2));

//toString()
let key=112;
console.log("key",typeof(key.toString()));



