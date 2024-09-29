const registerFormElement = document.querySelector("#registerForm");

registerFormElement.addEventListener("submit",(event)=>{
  event.preventDefault();
  console.log(event);
  //const lastName =document.querySelector("input[name=lastName]");
  //console.log(lastName.value);

//Array olmadığı için forEach kullanamadık array'e dönüştürmek gerek.( toDo:Objects keyslerde dolanmayı dene)
// const elements = event.target.elements;
// console.log(typeof(elements));

// elements.forEach(item =>{
//   console.log(item);
// })

// bir form submit olayında form elemanlarına erişmek için kullanılan bir özelliktir. Bu özellik, formdaki tüm form elemanlarını (input, select, textarea vb.) içeren bir HTMLFormControlsCollection nesnesi döndürür. Bu nesne, formun her bir elemanını indeksleyerek, adlarına veya dizin numaralarına göre erişmenizi sağlar.
const elements = Array.from(event.target.elements);
//tüm inputları arraye çevirip elements değişkenine verdik.

//boş bir dizi oluşturduk.
const items = {}

//input array'inde dönüyoruz
elements.forEach( item =>{
  // console.table(item.value);
  if(item.type == "text" || item.type=="password" || item.type=="email"){
    //bir form elemanının name özelliğini anahtar (key) ve value özelliğini değer olarak kullanarak bir nesneye (object) ekleme işlemi yapar. Bu, form verilerini bir nesnede toplamak için yaygın bir yöntemdir.
    items[item.name]=item.value
  }
})
console.table(items);



})











