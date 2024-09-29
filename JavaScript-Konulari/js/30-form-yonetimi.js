const registerFormDom = document.querySelector("#registerForm");
console.log(registerFormDom);

//reset işlemi sayfa yenileme işlemini tetiklemez.
registerFormDom.addEventListener('reset', ()=>{
  console.log("Reset atıldı");
})


//submit işlemi yapılırken defaultta sayfanın yenilenmesi işlemi gerçekleştiği için log saliseler ile bastırılır.bu varsayılan işlem i devre dışı bırakmak için event.preventDefault() metodu kullanılır.
// registerFormDom.addEventListener('submit',(event)=>{
//   event.preventDefault();
//   console.log("Kaydet butonuna basıldı");
// })


//ReferenceError: Cannot access 'formSubmit2' before initialization hatası alırsın çözümü ise function'ı addEventListener'dan önce tanımlamak.
registerFormDom.addEventListener('submit', formSubmit2);

const formSubmit2=(event)=>{
  event.preventDefault();
  console.log("Kaydet butonuna basıldı");
}

//function veri tipi defaultta var ile tanımlandığı için var'la tanımlanan veri tipleri kod akışının her yerinden ulaşılabilir tiptetir o yüzden addEventListener'den öncede sonrada tanımlasan sorun olmaz.
// registerFormDom.addEventListener('submit', formSubmit);
// function formSubmit(event){
//   event.preventDefault();
//   console.log("Kaydet butonuna basıldı");
// }
