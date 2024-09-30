console.log("window.location.hash",window.location.hash)
console.log("window.location.port",window.location.port)
console.log("window.location.host",window.location.host)
console.log("window.location.hostname",window.location.hostname)

//.hash-route-link class'a sahip elementleri bul.
const hashLinks = document.querySelectorAll(".hash-route-link");

const routes ={
    "":{
        title:"AnaSayfa"
    },
    "#about":{
        title:"About Us"
    },
    "#todos":{
        title:"ToDo's"
    },
    "#contact":{
        title:"Contact"
    }
}
//Herhangi bir .hash-route-link elemanına tıkladığımda itemi ve eventilerini consol'a yazdırdım.
hashLinks.forEach(item =>{
    item.addEventListener('click', (event)=>{
        
        console.log(item.hash);
        console.log(event);
        checkRoute(item.hash);
        
    })
})

//Bu parametre olayını güncelleme zamanından dolayı verdik memory'den hemen geçiyor fonksiyona.(fonksiyonun önceki halinde işlev geç işliyordu.)
function checkRoute(hash=window.location.hash){
    console.log(routes[window.location.hash]);
    //window.location.hash ile bulunduğun url'nin hash'ini seç string olarak geliyor zaten ve routes objesinin içine key değeri olarak veriyoruz. degiskenAdi["stringDeger"] ile value'ye ulaşabiliyoruz. 

    //Sayfanın başlığına click yaptığımız route'un valuesini veriyoruz.
    document.title= routes[hash].title;
}



//234. video

// function deneme(){

// const denemeArr ={
//     "tekin":26,
//     "emre":18,
//     "yakup":56,
//     "nurten":56
// }
// console.log(denemeArr["tekin"]);

// }
// deneme();