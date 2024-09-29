
const users =[1,2,3,false,null,"deniz",[0,2,4]]
console.log(users);
console.log(users.length);

const otherUsers = [];
console.log(otherUsers.length);

const tech = new Array(100);
console.log("tech length",tech.length);
console.log("tech kendisi",tech);


const tech2 = new Array("item1","item2",3);
console.log("tech2 length",tech2.length);
console.log("tech2 kendisi",tech2);
console.log("tip bilgisi",typeof(tech2));


console.log("Array'misin", Array.isArray(tech2));

console.log(
  users[0],users[3],users[5]
);

console.log("users array son öge",users[users.length-1]);
console.log("users array sondan bir önceki öge",users[users.length-2]);

//Yeni Öge Eklemek(PUSH)
//Son öge olarak eklemek
users.push("Tekin");
console.log(users);

//İlk öge olarak eklemek(UNSHIFT)
users.unshift("Tekin");
console.log(users);

//Bilgiyi değiştirmek
users[0]="Mama";
console.log("yeni dizi",users);

//Bir ögeyi silmek(Son elemanı)(POP)
const popItem = users.pop();
console.log("son öge silinmiş",users)
console.log(popItem);

//İlk ögeyi silmek(SHIFT)
const shiftItem=users.shift();
console.log("ilk ögesi silinmiş dizi",users);
console.log(shiftItem);