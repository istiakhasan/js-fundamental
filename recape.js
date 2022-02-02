function largestElements(number){
    let max=number[0]
    for(let i=0;i<number.length;i++){
        if(max<number[i]){
           max=number[i]
        }
    }
    return max
}

var a=largestElements([2,8,1,10,14,3])
console.log(a)
