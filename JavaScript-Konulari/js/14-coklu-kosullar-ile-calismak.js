const userId= "12345678900";
const userAge=25;

//TC 11 length olacak.

if (userId.length===11 && userAge>=18 && userAge<100) {

  let idTitle= document.querySelector("#title");
  console.log("Siteye Girebilirsiniz!");
  idTitle.innerText="sa"
  
}else if(userId.length===11 && userAge<18){
 console.log("Siteye Giremezsiniz Çünkü 18 yaşından küçüksün!");
}else if(userId.length !==11){
  console.log("TC No bilgisi doğru formatta değil!");
}

//else kullanmayarak denetimi arttırıyorum ve bir çok durumu ele alabiliyorum.

if (!false) {
  console.log("Çalışır mı çalışmaz mı");
}