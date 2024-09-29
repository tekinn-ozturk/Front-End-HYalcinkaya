
const userAge = prompt("Lütfen Yaşnızı Giriniz!");
if (userAge>=18) {
  console.log("Sisteme Giriş Başarılı :) ");
}
else{
  console.log("Sisteme Giriş Bşarısız :(");
  window.location.replace("https://www.linkedin.com/login/tr?fromSignIn=true&trk=guest_homepage-basic_nav-header-signin");
}