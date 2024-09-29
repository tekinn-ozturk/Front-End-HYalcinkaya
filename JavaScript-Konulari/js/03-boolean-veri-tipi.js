
//is | has ile isimlendirmek daha anlamlıdır.
let isUserActive = false; //0
console.log(isUserActive);
//kullanıcı adı ve şifre soruldu ve doğrulandı.
isUserActive=true; //1
console.log(isUserActive);

let user;
console.log(user);
console.log(Boolean(user)); //yok hükmünde 0 yani false;

console.log(Boolean("")); //yok hükmünde 0 yani false;
console.log(Boolean(0));
console.log(Boolean("admin"));

console.log(1>3); //false

console.log(Boolean(-0)); //false

console.log(Boolean(0===0)) //hem içerik hem de tip eşit mi?
console.log(Boolean(0==0)); //sadece içerik eşit mi?

user ="tekin";
console.log("user var mı?",Boolean(user));



