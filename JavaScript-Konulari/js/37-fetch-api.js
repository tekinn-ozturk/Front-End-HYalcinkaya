// fetch("https://jsonplaceholder.typicode.com/todos/").then(response=>{
//   console.log(response)
//   //HTTP yanıtlarından alınan veriyi json nesnesine çevirmek için response.json(); metodu kullanılır ama normal bir dizeyi çevirmek için JSON.parse() metodu kullanılır.

//   return response.json();
// }).then(json=>{
//   console.log(json);
// })

const jsonplaceholderApi = "https://jsonplaceholder.typicode.com/todos/";

const fetchingDiv= document.querySelector("#fetching");

const ulElementFetch=document.createElement("ul");
fetchingDiv.append(ulElementFetch);

// fetch(jsonplaceholderApi).then(res=>res.json()).then(jsons=>{
//   jsons.forEach(json=>{
//     const liElementFetch = document.createElement("li");
//     ulElementFetch.append(liElementFetch);
//     liElementFetch.innerHTML=json.title
    
    
//   })}
// ).catch(err=>{
//   return console.log(err);
// });

async function get() {
  const response =await fetch(jsonplaceholderApi);
  const json = await response.json();

  json.forEach(item=>{
    const liElement = document.createElement("li");
    ulElementFetch.append(liElement);
    liElement.innerHTML= item.title;
  })

  
}

get();

