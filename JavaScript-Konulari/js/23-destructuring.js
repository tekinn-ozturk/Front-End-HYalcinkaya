const systemInfo =["127.0.0.1", "8000", "development", "admin", "123456","nginx","linux"];
console.log(systemInfo[0]);

//systemInfo ARRAY ise değişkenleri bu şekilde yazarak destructuring yapabiliriz.
const [ip,port, dev,username,password,...ahmet] = systemInfo;
console.log(ip);
//değişkeni tanımlarken ... kullandığımda dizide kalan elemanları dizi haline getirdi. 1 kalsaydıda öyle dizi haline getirecekti.
console.log(ip,port,dev,username,password, ahmet);



const user ={
  firstName: "Tekin",
  lastName:"Ozturk",
  age:25,
  hobbies: ["futbol","basketbol","beyzbol"],
  info:["C#","JS","React"]
}

//user OBJE

// const {firstName,lastName, age} =user;
// console.log(age);

// Değişkenin ismini değiştirebilme
// const {firstName,name, age:yas} =user;
//objenin içindeki property'ler ile aynı isimde olmalı değişkenler, firstName eşleşti, name eşleşmedi, age eşleşti ve age'in ismini değiştirdik.
// console.log(name); 

// const {firstName,lastName, age:yas, ...rest} =user;
// console.log(rest);

// const hello =(obj)=>{
// console.log(obj.firstName,obj.lastName,obj.age);
// }

// hello(user);

//objenin içinde oldukları için { } içinde olmalı bu değişkenler.
const hello =({firstName,lastName,age}) =>{
  console.log(firstName,lastName,age);
}
hello(user);


const helloV2 =(obj) =>{
  const {firstName,lastName,age} = obj;
  console.log(firstName,lastName,age);
}
helloV2(user);

