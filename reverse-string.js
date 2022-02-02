// let arr=[1,2,3,4]
// console.log(arr.reverse())

// let a='kashem'
// console.log(a.reverse())


const greetings='Hello, how are you?';
function reverseString(text){
    let reverse=''
    for(const letter of text){
        
        reverse=letter+reverse
    }
    return reverse
}

const reversed=reverseString(greetings)
console.log(reversed)