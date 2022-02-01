var numbers=[2,5,5,8]
var total=0
for(let i=0;i<numbers.length;i++){
    total+=numbers[i]
}
console.log(total)



function arrTotal(numbers){
    var sum=0
    for(let i=0;i<numbers.length;i++){
       const element=numbers[i]
       sum+=element
    }
    return sum
}

const total2=arrTotal([2,5,8,10])
console.log(total2)