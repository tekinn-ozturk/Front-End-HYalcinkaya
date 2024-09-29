
//document; browser'da çalıştığımız beyaz ekranın tamamı.

//etiket ismiyle elementlere ulaşma;
//h1'e ulaşalım.

//getElementsByTagName
console.log(
  document.getElementsByTagName("h1")
);

//getElementById
console.log(
  document.getElementById("title").innerText
);

//getElementsByClassName
console.log(
  document.getElementsByClassName("bg-aqua")
);

//TEKLİ ELEMENT SEÇİMİ --> querySelector
//querySelector
//İstediğimiz elementi kod bloğunda gider arar ve ilk gördüğü itemi sana getirir.İlk gördüğünü getirmesi kritik anahtar kelime.

//Selector içerisinde elementlere css'teki gibi sesleniyoruz.
let firsth1=document.querySelector("h1")
console.log("querySelector | direkt element",firsth1);

let firstId =document.querySelector("#title")
console.log("querySelector | #id", firstId);

let firstClass= document.querySelector(".bg-aqua")
//Eski içeriği koruyup üzerine ekleme yapıyoruz.
//firstClass.innerHTML="<p>Salamın Aleykum</p>"
// bu ifadede eski içeriği tamamen kaldırıp innerHTML'e eşitlediğin ifadeyi yeni içerik sayıyor.

firstClass.insertAdjacentHTML('beforeend', '<p>Yeni içerik</p>');

firstClass.innerHTML="<p>Salamın Aleykum</p>";
console.log("querySelector | .class",firstClass);

//ÇOKLU ELEMENT SEÇİMİ --> querySelectorAll

let listItemAll= document.querySelectorAll(".list-container>.list>.list-item");
for (let i = 0; i < listItemAll.length; i++) {
  console.log(listItemAll[i]);
  
}






