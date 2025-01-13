//Tuple
type RGB = [number , number , number] ; 

function getRandomColor ():RGB{
     const r = Math.floor(Math.random() *255); 
     const g = Math.floor(Math.random() *255); 
     const b = Math.floor(Math.random() *255) ; 
     return [r,g,b]; 
}
const colorOne = getRandomColor() ; 
const colorTwo = getRandomColor() ;
console.log(colorOne, colorTwo)


//object Literal
type User = {
    name:string , 
    score:number ,
}

const User1:User  ={name:'Jacob' , score:100}; 
function formateUser(user:User){
       return user.name ;
}

console.log(formateUser(User1)); 
