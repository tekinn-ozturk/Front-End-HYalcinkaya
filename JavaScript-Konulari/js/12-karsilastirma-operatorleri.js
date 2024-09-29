//kullanıcının bilmediği sistemdeki password şifresi:
const sysPassword =123456;
const userPassword ="123456";

//Prompt'tan alınan her türlü veri girişi string sayılır.
// const userPassPrompt = prompt("Şifrenizi giriniz!");
// console.log(userPassPrompt,typeof(userPassPrompt));



//== sadece içeriği karşılaştırır.
// console.log(sysPassword ==userPassPrompt);


//=== hem içeriği hemde veri tipini karşılaştırır.
// console.log(sysPassword ===userPassPrompt);

console.log(sysPassword==userPassword);


const user ="admin";
console.log(user != "normalUser");

console.log(user !== "admin");

const number =123;
const newNumber="123";
console.log(number!=newNumber);
console.log(number!==newNumber);


const year =2000;

console.log("2000 yılından büyük mü?", 2010>2000);

console.log("2000 yılından büyük mü?", 1980>2000);

console.log("2000 yılından büyük mü?", 1980<2000);


const userName = "Tekin";
const password =123456;

console.log(Boolean(userName.length>3 && password));
console.log(Boolean(userName.length>8 && password));
console.log(Boolean(userName.length>3 || password));
console.log(Boolean(userName.length>9 || password=="0"));

