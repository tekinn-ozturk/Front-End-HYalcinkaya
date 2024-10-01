console.log("window.location.hash",window.location.hash)
console.log("window.location.port",window.location.port)
console.log("window.location.host",window.location.host)
console.log("window.location.hostname",window.location.hostname)

//.hash-route-link class'a sahip elementleri bul.
const hashLinks = document.querySelectorAll(".hash-route-link");
const app= document.querySelector("#app");

const routes ={
    "":{
        title:"AnaSayfa",
        data:"home.html",
        isApi:false
    },
    "#about":{
        title:"About Us",
        data:"about-us.html",
        isApi:false
    },
    "#todos":{
        title:"ToDo's",
        data:"https://jsonplaceholder.typicode.com/todos/",
        isApi:true
    },
    "#contact":{
        title:"Contact",
        data:"contact.html",
        isApi:false
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

    const dataUrl = routes[hash].data;
    console.log(dataUrl)
    //o anki hash ne ise route'nin içersinden o hash'in isApi bilgisini çekicez.
    isApi = routes[hash].isApi
    if(isApi){
        //Daha sonradan eklenen bi ul>li yapısı var bu sebeple bu yapı eklenmeden önce sayfayı temizle.
        app.innerHTML="";
        const createUl = document.createElement('ul');
        app.append(createUl);
        
        fetch(dataUrl).then(res=>res.json()).then(data=>{
            data.forEach(item=>{
                
                const createLi = document.createElement('li');
                createLi.innerHTML= item.title;
                createUl.append(createLi);

            })
        })
       
    }else if(!isApi){
        fetch(dataUrl).then(res=>res.text()).then(res=>app.innerHTML= res)

    }

    
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