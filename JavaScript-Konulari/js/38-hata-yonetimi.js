


//tanımlanmamış değişkeni yazdırmak istiyorum. try-catch yapısı kullanmazsam direkt hata basar.
//console.log(info);

try {
  console.log(info);
} catch (error) {
  console.error("ERROR::: ",error)
  
}


const jsonplaceholderApi = "https://jsonplaceholder.typicode.com/todos/";

const fetchingDiv= document.querySelector("#fetching");

const ulElementFetch=document.createElement("ul");
fetchingDiv.append(ulElementFetch);


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