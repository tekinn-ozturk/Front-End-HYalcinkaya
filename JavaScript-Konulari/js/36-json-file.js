const info1 = {
  "ad":"Tekin",
  "soyad":" Öztürk",
  "yas":25,
  "aileUyeleri":["Nurten","Yakup","Emre"],
  "hobileri":{
    1:"Futbol",
    2:"Finans",
    3:"Sinema"
  }

}

console.log(info1,typeof(info1))

const info2 = `
{
  "ad":"Tekin",
  "soyad":" Öztürk",
  "yas":25,
  "aileUyeleri":["Nurten","Yakup","Emre"],
  "hobileri": {
    "1": "Futbol",
    "2": "Finans",
    "3": "Sinema"
  }

}
`;

console.log(info2,typeof(info2));

const parsedInfo2 = JSON.parse(info2);
console.log(parsedInfo2,typeof(parsedInfo2));

const stringInfo2 = JSON.stringify(parsedInfo2);
console.log(stringInfo2,typeof(stringInfo2));



