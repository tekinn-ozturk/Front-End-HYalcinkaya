const age =18;
const userName="Emre"

let idTitleElement = document.querySelector("#title")

console.log(idTitleElement);

idTitleElement.innerHTML= `${age>18 ? "Sitemize Hoşgeldin! "+userName :"Sitemize Giriş Yapamadın :("+userName}`