const users =[
  {id:1, name:"Ahmet"},
  {id:2, name:"Tekin"},
  {id:3, name:"Emre"},
  {id:4, name:"Yunus"}
]


const newUsers =users.map(user=>{
  const userName = user.name.toUpperCase();
  const id= user.id;

  return(
    {
      id: id,
      name: userName
    }
  )
})
