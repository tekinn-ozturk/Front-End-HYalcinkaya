const femaleUsers =["Melda", "Kayra", "Ceren"];
const maleUsers=["Metin","Kemal","Can"];
const items =[1,2,3,4,5,6,7,8];
const mixItems =[1,2,200,100,1000,99,3,4,5,6,7,8,9];

//SPLIT(string'ten Arraye çevir.)
const users ="Melda,Kayra,Kemal,Can";
const usersStrToArray=users.split(",");
console.log(usersStrToArray);

const textInfo ="lorem ipsum dolor";
const textInfoToArray = textInfo.split(" ");
console.log(textInfoToArray, typeof(textInfoToArray));
const returnStr= textInfoToArray.toString();
console.log(returnStr,typeof(returnStr));


//SLICE
//Parametresiz kullanılırsa diziyi kopyalar ve kopyayı döndürür.
console.log(items.slice(1)); // 1.itemi siliyor geri kalanı ekrana basar.
console.log(items.slice(0)); //diziden hiç bir şey silmiyor.
console.log(items.slice(2)); // 2.item ve öncesini siliyor kalanı ekrana basar.
console.log(items.slice(5)); // 5.item ve öncesini siliyor kalanı ekrana basar.

console.log(items.slice(1,3)); // 1. itemi almaz 2. ve 3. itemi basar.
console.log(items.slice(1,7)); // 1.itemi almaz 7.iteme kadar 7. item dahil ekrana basar.

console.log(items.slice(-2)); //sondan başlar sadece sondan 2. olan elemana kadar basar.

//Includes
console.log(maleUsers.includes("Metin"));

//IndexOf
console.log(maleUsers.indexOf("Metin"));
console.log(maleUsers.indexOf("Can"));
console.log(maleUsers.indexOf("CAN"));
console.log(maleUsers.indexOf("Ayse"));

//toString
console.log(femaleUsers.toString());

//Join
console.log(
  items.join("-")
);

//merge 2 diziyi birleştirmek;
// const allUsers =[maleUsers,femaleUsers];
// const allUsers = maleUsers.concat(femaleUsers);
// console.log(allUsers);

// maleUsers.push(...femaleUsers);
// console.log(maleUsers);

// const newUsers=[...femaleUsers, ...maleUsers, ...items]
// console.log(newUsers);

//copy
let newList = maleUsers;
newList.push("Tekin");
console.log("newList",newList);
console.log("maleUsers",maleUsers);
// Şu an ram'de newList ve maleUsers aynı yerde tutuluyor

let minList = [...femaleUsers];
minList.push("Havva");
console.log("minList",minList);
console.log("femaleUsers",femaleUsers);

