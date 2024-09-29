//1 den fazla satırlık operasyon varsa scope açmalıyız.
// () => {}

//1 satırlık operasyonda scope açmana gerek yok.
// () => ...

//Standart Func
function helloFunction(name) {
  console.log(name);
}


//Arrow Func

const helloArrowFunc =(name) =>{
  console.log(name);
}

const helloArrowFuncv2 =(name) => console.log(name);
const helloArrowFuncv2_2 =(name="defaultDeger") => console.log(name);

const helloArrowFuncv3 = name => console.log(name); //Eğer 1 parametre varsa parantezede gerek yok.
const helloArrowFuncv4 =(firstName, surName) => console.log(firstName+surName);
const helloArrowFuncv5 =(firstName, surName) =>{
  fullName = `${firstName} ${surName}`;
  return fullName;
} 

//Objeler süslü parantezler ile başlar ve içerisindeki bilgileri Arrow Func ile gönderebiliriz.
//obje tanımlama,
// const userObj={
//   userName:"Kayra"
// }

const userNameObj =(user) =>{
  return {userName:user.toUpperCase()}
}

const newUserName= userNameObj("Tekin");
console.log(newUserName);

//tek satırlık operasyon varsa return yazmaktan kurtulmak istiyorsan normal parantez aç. 
const userNameObjv2 =(user) => ({userName:user.toLowerCase()})
const newUserNamev2= userNameObjv2("Emre");
console.log(newUserNamev2);