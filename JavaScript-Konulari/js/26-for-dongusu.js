
const users =["Tekin","Emre","Yakup","Nurten","Ali"];

for (let userCount = 0; userCount < users.length; userCount++) {
    if (userCount==1) {
      continue; // Dizinin 1.elementi atlanır ve diziyi yazdırmaya devam eder.
      // break; //ilgili elemana geldiğinde döngüden çıkar.
    }
    console.log(userCount);
    console.log(users[userCount]);
    
  
}