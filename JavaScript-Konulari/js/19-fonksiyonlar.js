//parametresiz fonksiyon tanımlamak
function hello() {
  console.log("Merhaba Dünya");
}

//fonksiyonu çalıştırmak.
hello();

function greetings(name) {
  console.log(`Merhaba ${name ? name : "Dünya"}`);
}

greetings("Tekin");
greetings();

function greetingsv2(firstName, surName) {
  console.log(`Merhaba ${firstName} ${surName}`);
}

greetingsv2();
greetingsv2("Tekin");
greetingsv2("Tekin", "Öztürk");

function greetingsv3(firstName = "Ali", surName = "") {
  console.log(`Merhaba ${firstName} ${surName}`);
}

greetingsv3();
greetingsv3("Tekin");
greetingsv3("Tekin", "Öztürk");

// *******************************************************************

function multiply(num1, num2) {
  num1 * num2;
  //dışarı bir bilgi göndermesede içeride bir şeyler yapılıyor.
}

function changeHtmlItemText(element, text) {
  const item = document.querySelector(element);
  item.innerHTML = text;
}

changeHtmlItemText("title", "ImparatorJR");

//RETURN
function multiplyWithResult(num1, num2) {
  let result = num1 * num2;
  return result;
}

console.log(multiplyWithResult(5,6));

function recursive(){
 const info = prompt("Adınız");
 if(info==="Tekin"){
  return console.log("OK");
 }
 recursive();

}

// recursive();