let langs = ["C#", "JavaScript", "React", "Java"]
// let lang1, lang2, lang3,lang4;

// lang1= langs[0];
// lang2= langs[1]
// lang3 = langs[2];
// lang4 =langs[3]

// console.log(lang1,lang2,lang3,lang4);

let [lang1,lang2,lang3,lang4]=langs; 
console.log(lang1,lang2,lang3,lang4);

// idTitleElement.innerHTML= `${age>18 ? "Sitemize Hoşgeldin! "+userName :"Sitemize Giriş Yapamadın :("+userName}`
 
const calculator=(num1,num2) =>{
  let sum= num1+num2;
  let sub = num1>num2 ? num1-num2 : num2-num1;
  let multi = num1*num2;
  let divi = num1/num2;
  return [sum,sub,multi,divi]
}

let [x,y,z,t] = calculator(10,2);
console.log(x,y,z,t);


const person ={
  firstName : "Tekin",
  lastName:"Ozturk",
  age:25,
  salary:32000

}

// const newPerson = person;
// console.log(newPerson);

//person nesnesi ile aşagıda let ile oluşturduğumuz değişkenlerin map'lenmesi için key name'lerinin aynı olması gerek yoksa mapping işleminde sıkıntı çıkar.

let {firstName,lastName,age,salary}=person;
let {firstName:isim,lastName:soyIsim,age:yas,salary:maas}=person;


console.log(firstName,lastName,age,salary)
console.log(isim,soyIsim,yas,maas);


