let firstName ="Tekin";
let lastName='Ozturk';
let trainig = `Template Literal JS`;

console.log(firstName + " "+ lastName);
console.log("firstName.length= ",firstName.length);

//Kaçış karakteri \
console.log("(firstName+ \" \"+lastName).length",(firstName+" "+lastName).length);
console.log("(firstName+ ' '+lastName).length",(firstName+" "+lastName).length);

console.log('Tekin\'in selamı var geçen gördümde onu Akbank\'ta.');
//CHARAT
console.log("firstName[0]",firstName[0]);
console.log("firstName[1]",firstName.charAt(1));

//UPPERCASE & LOWERCASE
console.log("firstName.toLowerCase()",firstName.toLowerCase());
console.log("firstName.toUpperCase()",firstName.toUpperCase());


//SUBSTRİNG
//kullanıcıdan veri girişi al. ardından bu veri girişinin ilk harfini büyük geri kalanıu küçük yap.
let userName="emRecaN";
console.log(userName);
console.log(userName.substring(0,1).toUpperCase()+userName.substring(1).toLowerCase());



//SEARCH
console.log("trainig.search('Lorem')",trainig.search("Lorem"));
console.log("trainig.search('Temp')",trainig.search("Temp"));
console.log("trainig.search('Lit')",trainig.search("Lit"));
console.log("trainig.search('lit')",trainig.search("lit"));
console.log("trainig.search('lit')",trainig.toLowerCase().search("lit"));

console.log("trainig.indexOf('Temp')",trainig.indexOf("Temp"));

//SLİCE
const adminMail ="admin@js.com";
// user: admin | domain: js.com

const domainStart = adminMail.slice(adminMail.search("@")+1); //@ işaretinden sonra devam eden ifadeyi yazdırır @ işareti dahil. @ işaretinden kurtulmak istiyorsan +1 de.
console.log(domainStart);

const user = adminMail.slice(0,5); //istediğin indexten başlayıp istediğin indexe kadar olan ifadeyi yazdırır. Son index dahil değil. ilk index dahil.

console.log(user);

const user2 = adminMail.slice(adminMail.search("a"),adminMail.search("@"));
console.log(user2);

//REPLACE
trainig= trainig.replace("JS","JavaScript");
console.log(trainig);

//INCLUDES
console.log("Temp kelimesi var mı?",trainig.includes("Temp"));
console.log("Temo kelimesi var mı?",trainig.includes("Temo"));




