//RETURN etmeyi unutma !!

const priceList =[10,20,30,400,300,100,500,30,50,70,90];

const newPriceList= priceList.filter(price=>{
  return price>=50
});

console.log(newPriceList);

const users =[
  {name:"Tekin", isActive:true},
  {name:"Emre", isActive:true},
  {name:"Nurten", isActive:true},
  {name:"Yakup", isActive:true},
  {name:"lorem", isActive:false},
  {name:"ipsum", isActive:false}
]

const activeUsers= users.filter(user=>{
  return user.isActive==true;
});
console.log(activeUsers);

