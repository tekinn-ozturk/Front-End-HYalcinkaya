
const titleElement = document.querySelector('#title');

console.log(titleElement.classList);

titleElement.classList.remove("text-primary", "bg-aqua");
titleElement.classList.add("display-1");

titleElement.classList.toggle("bg-primary"); //bi öneki haline getir, bi sonraki haline getir 2 hareket yapıyor.Özellike butonlarda işimize yarıyor.