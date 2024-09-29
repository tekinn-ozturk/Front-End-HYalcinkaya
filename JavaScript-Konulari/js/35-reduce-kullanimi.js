
//arr.reduce((onceki,simdiki)=>{yapilacak işlem}, ilkDeger)

const items =[1,2,3,4,5]
const sum=items.reduce((accumulator,current)=> accumulator+current)
//accumulator: Birikimli değer
//şu an ilkDeger parametresi defaultta 0'dır.
console.log(sum);

const prices=[100,200,10,40,500,90]

const maxPrice = prices.reduce((acc,current)=>Math.max(acc,current))

console.log(maxPrice);

const itemPrices=[
  {name:"Laptop", price:100},
  {name:"Mouse", price:200},
  {name:"Keyboard", price:50},
  {name:"Mouse Pad", price:10},
]

const sumItemPrices = itemPrices.reduce((acc,current)=>
acc+current.price
,0)
//ilk değer 0 : 1.adım:ilkDeger(0)+curr(100)= acc(100): 2.adım:acc(100)+curr(200) =yeniacc(300)
console.log(sumItemPrices)


//sepetin toplam tutarı nedir ?
const sepet = [
  { ad: "Elma", fiyat: 3, adet: 4 },
  { ad: "Armut", fiyat: 5, adet: 2 },
  { ad: "Portakal", fiyat: 6, adet: 3 },
  { ad: "Muz", fiyat: 2, adet: 6 }
];

const sumSepet = sepet.reduce((acc,current)=>{
  
  
  return acc+(current.adet*current.fiyat)

},0);

console.log(sumSepet+" TL");

// Bir dizideki sayıları gruplayarak pozitif ve negatif olanları ayırmak istiyoruz. reduce() metodunu kullanarak pozitif ve negatif sayıları ayrı ayrı gruplara ayıran bir fonksiyon yazın.
const sayilar = [1, -3, 5, -7, 8, -2, 9, 0];

const emptyPositive=[];
const emptyNegative=[];
const emptyZero=[];
const grup= sayilar.reduce((acc,current)=>{

 
  if(0<current){
    emptyPositive.push(current);
  }else if(0>current){
    emptyNegative.push(current)
  }
  else{
    emptyZero.push(current);
  }

},0)

console.log("Pozitif",emptyPositive);
console.log("Negatif",emptyNegative);
console.log("Sıfır",emptyZero);





//ANLAMADIM 
const users =["lorem","ipsum","derya","deniz","ipsum","deniz","lorem"]

//allUsers:(acc)İşlem sonucunda biriken nesnedir.
//current: o anda işlenen nesne
//Başlangıç değerini {} ile nesne haline getirdik.Yani birden fazla özelliği var.
const countedUsers= users.reduce((allUsers,current)=>{
  
  const count = allUsers[current] ?? 0;
  return{
    ...allUsers,
    [current]: count+1
  }
},{})
console.log(countedUsers);







