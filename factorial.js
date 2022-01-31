
function getFactorial(num){
    let fact=1
    for(let i=1;i<=num;i++){
         fact=fact*i
    }
    return fact

}


let myFactorial=getFactorial(4)
console.log("my factorial is-",myFactorial)