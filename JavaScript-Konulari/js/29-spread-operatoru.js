const arr1 =["C#","Java"];
const arr2 =["JavaScript","ReactJS"];

//bu saçma bişey 
const arr3 =[arr1,arr2]
console.log(arr3);

//bu spread operatorunun dogru kullanımı
const arr4=[...arr1,...arr2]
console.log(arr4);


const randomFunc =(a,b)=>{
  console.log(a,b);

}
randomFunc(...arr1)



const noteList=[55,75,85,90]

const avgCalc=(num1,num2,num3,num4)=>{

  let avg= (num1+num2+num3+num4)/4;
  return avg;
}
console.log(avgCalc(...noteList));





