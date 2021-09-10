const outputEnging = (user) =>{
    if(!user.email || !user.password){
        throw new Error("Your searching is invalid")
    }
    return "searching valid"
}

const user = {email:"smartbrain@gmail.com",password:"161635563"}
const textsearchCase = outputEnging(user);
 

try{
    const textsearchCase = outputEnging(user);
    console.log(textsearchCase)   
}catch(error){
    console.log("inside catch:",error)
}


console.log("Mandalay")
console.log("yangon")
console.log("Ayayardy")
console.log("Myintgyinar")
