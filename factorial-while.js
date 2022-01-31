// function getFactorial(num){
//     let factoral=1;
//     let i=1
//     while(i<=num){
//         factoral=factoral*i
//         i++
//     }
//     return factoral
// }

// let myFact=getFactorial(4)
// console.log(myFact)

function getFactorial(num){
    let factoral=1;
    let i=num
    while(i>=1){
        factoral*=i
        i--
    }
    return factoral
}

let myFact=getFactorial(4)
console.log(myFact)