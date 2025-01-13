//Type Guard

type Id = string | number  ; 

function formateType(value:Id){
    if(typeof value==='string'){
       console.log('the value is String')
    }
    else {
      console.log('the value is Number')
    }
}
//tagged interfaces
interface User {
    type:'user' ,
    name:string ,
    score:number ,
}
interface Employee{
    type:'employee' ,
    title:string , 
    designation:string , 
    salary:number
}

const User1:User  ={type:'user',name:'typescript',score:100};
const User2:Employee = {type:'employee',title:'rahim',designation:'developer',salary:50000} 

type UserTypes = User | Employee ; 

function formateUser (value: UserTypes) {
         if(value.type=='employee'){
            console.log(value.title);
         }
         else {
            console.log(value.name);
         }
}

formateUser(User1)
formateUser(User2)
