//obje oluşturmak
const person = {
  firstName:"Tekin",
  lastName:"Öztürk",
  "last login":"2024.01.01",
  fullName: function adSoyad() {
    return this.firstName+ this.lastName
  }
  
}
//objenin bilgilerine erişmek
console.log(person.firstName);
console.log(person["last login"]);
console.log(person.lastName);
console.log(person["lastName"]);


//objeye ekstra bilgi eklemek
person.age = 22;
console.log(person);

person["last time change password"]="2024.01.01";
console.log(person);

//objenin herhangi bir bilgisini değiştirmek
person.lastName="Can";
console.log(person);

person["last time change password"]="1998.01.01";
console.log(person);

console.log(person.fullName());

//ilgili objenin sadece key değerlerine ulaşabilirim
console.log(Object.keys(person));
//ilgili objenin sadece değer değerlerine ulaşabilirim
console.log(Object.values(person));
//ilgili objenin anahtar değer ikililerine dizi halinde ulaşabilirim
console.log(Object.entries(person));


const product ={
  price: 200,
  isInStock:false,
  tax:1.18,
  name:"",
  priceWithTax: function () {
    return this.price* this.tax
  }

}

console.log(product);

const phone= Object.create(product);
console.log(phone);
phone.name="iPhone";
phone.isInStock=true;
phone.price=1000;

console.log(phone.priceWithTax());