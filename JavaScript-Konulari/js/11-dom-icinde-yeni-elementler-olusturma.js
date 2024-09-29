
//dom elemanlarına erişmek devam
let ulElement = document.querySelector("ul");
console.log("ulElement",ulElement);

let listItem = document.querySelector(".list-item:nth-child(2)");
console.log("list-item",listItem);

const yeniTag = document.createElement('div');
const yeniH1 = document.createElement('h1');

//İç içe elemanlar yaratmak createElement ile.
yeniTag.append(yeniH1);
yeniH1.innerText="create element ile yapıldı."
document.body.prepend(yeniTag);
// document.body.append(yeniTag);

{/* <ul id="toDoList">
    <li class="list-item">Isler1</li>
    <li class="list-item">Isler2</li>
    <li class="list-item">Isler3</li>
    <li class="list-item">Isler4</li>
    <li class="list-item">Isler5</li>
  </ul> */}

  //Hazırda bulunan listeye li eklemek
  const yeniLi=document.createElement('li');
  // let toDoList= querySelector('#toDoList');
  yeniLi.innerText="son eleman geldi";
  toDoList.append(yeniLi);

  //Dom elemanını değiştirme
  let changeSecondItem=document.querySelector('#toDoList>li:nth-child(2)');
  console.log(changeSecondItem);
  changeSecondItem.innerText="sa";
  


