var i=0
// while(i<15){
//     console.log(i)
//     if(i==5){
//         break
//     }
//     i++
// }
var num=[12,23,3,14,15,20,26]
while(i<num.length){
    var data=num[i]
    i++
    if(data==3){
        continue;
    }
    console.log(data)
}

// for(var i=0;i<num.length;i++){
//     var number=num[i]
//     if(number>14){
//         continue
//     }
//     console.log(number)
// }