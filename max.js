var business=340
var minister=300
var army=1130
var max=Math.max(business,minister,army)
console.log(max)
if(business>minister && business>army){
    console.log("business man is bigger")
}else if(minister>business && minister>army){
    console.log("minister is bigger")
}else{
    console.log("army is bigger")
}

function maxValue(first,second,third){
     let maxnumber=Math.max(first,second,third)
     return maxnumber
}

const mynumber=maxValue(2,5,6)
console.log(mynumber)


function findLargest(first,second){
    if(first>second){
        return first;
    }else{
        return second;
    }
}

const largest=findLargest(3,5)
console.log(largest)