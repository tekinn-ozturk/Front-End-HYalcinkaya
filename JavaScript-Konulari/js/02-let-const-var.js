let user1 ="1. user";
//değişken isimleri rakamla başlayamaz.

//her kodun başında aslında görünmeyen bir noktalıvirgül var.

//let ile tanımlanan değişkenler boş olarak tanımlanabilir ve daha sonra defalarca değiştirilebilir.
let user;
console.log("what?",user);
console.error("error",user);

user="Sistem Kullanıcısı";
console.log(user);

user = "Admin";
console.log(user);

// ********************************************************************

const PASSWORD =1234;
console.log("Sifre",PASSWORD);

//const ile tanımladığımız değişken artık değiştirilemez bir değer tanımlanır.

//Bloklar içinde FARKLI bir kod EVRENİ var ve burada daha önce kullandığmız değişken isimlerini kullanabiliriz, sanki onlar hiç kullanılmamış gibi. Const değişkeninin değiştirilebilir olma mantığıda burdan geliyor başka bir evren oluyor scope'lar arası.
{
  let user ="Tekin";
  const PASSWORD = 1998;
  console.log("blok içi",PASSWORD);
}

console.log("Son", PASSWORD);