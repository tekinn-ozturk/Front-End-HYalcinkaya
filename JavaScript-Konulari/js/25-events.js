//onClick üzerinden gitmek
// const titleElement =document.querySelector("#title");

// const titleCloseAndOpen =() =>{
//   titleElement.classList.toggle("d-none");
// }




//eventListener üzerinden gitmek
// const btn = document.querySelector("#hideTitle");

// btn.addEventListener('click', toggleTitle);
// function toggleTitle () {
//   const titleElement =document.querySelector("#title");
//   titleElement.classList.toggle("d-none")
// }

//eventListener üzerinden gitmek fonksiyonu içerde direkt tanımlamak
// const btn = document.querySelector("#hideTitle");

// btn.addEventListener('click',function () {
//   const titleElement =document.querySelector("#title");
//   titleElement.classList.toggle("d-none")
// } );


//içerde fonksiyon tanımladık ama arrow.
// const btn = document.querySelector("#hideTitle");

// btn.addEventListener('click', ()=> {
//    const titleElement =document.querySelector("#title");
//    titleElement.classList.toggle("d-none")
//  } );

const btn = document.querySelector("#hideTitle");

const titleElement =document.querySelector("h1#title");

btn.addEventListener('mouseenter', ()=>{
  titleElement.classList.add("bg-dark")
   
})

btn.addEventListener('mouseout', ()=>{
  titleElement.classList.remove("bg-dark");
})


