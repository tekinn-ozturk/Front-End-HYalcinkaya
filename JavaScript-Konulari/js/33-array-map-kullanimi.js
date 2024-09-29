//RETURN unutma 
const numbers =[1,2,3,4,5];

const newNumbers =numbers.map(num=>{
  return num*10;
});

console.log(newNumbers);

const users = [
  "tekin@js.com",
  "emre@gmail.com",
  "azra@hotmail.com",
  "ceren@mdn.com",
  "kardelen@react.com",
  "ayla#css.com",
]

//{name:"tekin", domain:"js.com", length:12, isValid:true}


// const deneme="azra@hotmail.com";
// const startIndex =deneme.indexOf("@");
// const domainName = deneme.slice(startIndex+1);
// console.log(domainName);




const newUsers= users.map(item=>{
  const domain= item.slice(item.search("@")+1);
  const user=item.slice(0,item.search("@"));
  const itemLength = item.length;


  //@ işareti stringin içinde bulunacak ve en başta olmayacak(0.indexte olmamalı.)
  if(item.search("@")>0){
    return({
      name:user,
      domain:domain,
      length:itemLength,
      isValid:true,
    })

  }

  return({
    userName:item,
    length:itemLength,
    isValid:false
  })


}).filter(item=>{
  return(
    item.isValid==false
  )
})

console.log(newUsers);


//100 adet li item nasıl oluşturulur.

//[...Array(100)] ifadesi, Array(100) ile oluşturulan bu 100 elemanlık boş diziyi "spread" operatörü ile alır ve yeni bir dizi içine yerleştirir. Bu, yeni bir dizi oluşturur ve bu dizinin her elemanı undefined olur.

//Bu undefined lar içersinde map ile giriyoruz ve her birini li yapıyoruz.herbirinin sembolü(adı)emptyItem ve indexlerini de alıyoruz. 
const liItems100 =[...Array(100)].map((emptyItem,index)=>{
  return(
    `<li>item-${index+1}</li>`
  )
})

console.log(liItems100);
