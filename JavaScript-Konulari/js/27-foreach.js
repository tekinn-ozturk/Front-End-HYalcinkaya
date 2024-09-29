
const users = ["Ayla","Ahmet","Mehmet","Burcin","Hilal"];

const serverInfo={
  ip:"127.0.0.1",
  port:"80",
  user:"admin",
  password:"123432453"
}

//item = users dizisindeki her bir ögeyi temsil ediyor.
users.forEach(item =>{
  console.log(item);
} )

//item, user gibi isimler verilebilir sen belirliyorsun.
users.forEach(user =>{
  console.log(user);
} )

//item'in indexini görebilen bir fonksiyon.
users.forEach((item, index)=>{
console.log(`${item}-${index}`);
} );


console.log("Array mi?", typeof(Object.keys(serverInfo)));

Object.keys(serverInfo).forEach(item=>{
  console.log(item);
  //key degerleri donuyor
  //Aynı zamanda value'yi döndürmek istiyorsan 
  console.log(serverInfo[item])

});

Object.values(serverInfo).forEach(item =>{
  console.log(item);
})

Object.entries(serverInfo).forEach(item=>{
  //anahtar-deger ikilisini dizi olarak döndürür.
  console.log(item);
})

Object.entries(serverInfo).forEach(([key,values],index)=>{
  console.log(key);
  console.log(values);
  console.log(index);
})

//Foreach Syntax
//foreach içersinde bir işlem yapılacaksa süslü parantez açmana gerek yok.
Object.keys(serverInfo).forEach(item=> console.log(serverInfo[item]))