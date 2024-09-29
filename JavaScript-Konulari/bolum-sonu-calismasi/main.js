const hexInputContainer = document.querySelector("#hexInputContainer");
const hexForm =document.querySelector("#hexColorForm");
const addNewButton = document.querySelector("#addNew");
let counter = 1;


//sayfa yüklendiğinde 1 input alanı yüklü gelsin
document.addEventListener("DOMContentLoaded", ()=>{
  hexInputContainer.append(newHexColorInput(counter));
})


//Ekle butonu her click olduğunda hexInputContainer elementinin içine newDiv elementi ekleniyor ve hepsinin id'si sıralı bir şekilde(counter sayesinde) 
addNewButton.addEventListener("click", () => {
  counter+=1;
  hexInputContainer.append(newHexColorInput(counter))
  
});

//yeni div oluşturma işlemini fonksiyonel bir hale getirdik.
function newHexColorInput(counter) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("col-sm");
  newDiv.innerHTML = `<label for="colorInput-${counter}" class="form-label">HEX Color</label>
                <input type="text" minlength="7" maxlength="7" class="form-control" id="colorInput-${counter}" name="colorInput-${counter}">`;

  return newDiv;
}

//BURAYI FAZLA YAZMIŞIM(EMİN DEĞİLİM )
//localSorage'daki colors dizisini bulursa dizeyi Parse edilmiş bi şekilde getir colors dizisi yoksa boş dize getir.
// let localStorageColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : [];

const colorCards = document.querySelector("#colorCards");



hexForm.addEventListener("submit",(event)=>{
   event.preventDefault(); //submit olduktan sonra sayfanın yenilenmesini engelliyor.


  //JSON.parse -> Diziyi(stringi) JavaSprict nesnesine çevirir.
  //JSON.stringify -> javaScript objesini diziye(stringe) çevirmek için kullanılır.
  

  //önceki değerleri kaybetmemek adına böyle bi yöntem geliştirdik.
  let localStorageColors = localStorage.getItem("colors") ? JSON.parse(localStorage.getItem("colors")) : [];

  //boş bir dizi
  let colors =[];
  
  //sayfadaki elementleri bir array haline getirdik ve içinde foreach ile dolandık.
  Array.from(event.target.elements).forEach(item=>{
    //eğer sayfada text tipinde bir input varsa onun value'sini al ve boş diziye yolla.
    if(item.type=="text"){
      colors.push(item.value);
    }
  });
  
  localStorageColors.push(colors);

  //localStorage'a bu dizeyi kaydet
  localStorage.setItem("colors",JSON.stringify(localStorageColors));
  
  //formu temizle.
  hexForm.reset();
  localStorageColors.forEach(colors =>{
  colorCards.append(addColorPalette(colors));
  const colorCardItems=document.querySelectorAll('.colorCard');

console.log(colorCardItems);

  colorCardItems.forEach(colorCard=>{
    colorCard.addEventListener("click", ()=>{
      // console.log(colorCard.style.backgroundColor);
      navigator.clipboard.writeText(colorCard.style.backgroundColor);
    });
  });
  
});
});






//bu fonksiyon items parametresi alıyor bu localStorage'daki renk dizisi. sonra rowElement'i yaratıyoruz card'ı kapsayan div. ardından items dizisi içersinde forEach'le dolanıyoruz ve her renk için card oluşturuyoruz.en son rowElement'e append ediyoruz.
function addColorPalette(items){
  const rowElement =document.createElement('div');
  rowElement.classList.add('row', 'gap-2');
  items.forEach(item=>{
    const cardItem =document.createElement('div')
    cardItem.classList.add('col-sm','card','mt-2','colorCard');
    cardItem.style.backgroundColor=item;
    rowElement.append(cardItem);
  })
  return rowElement

}



