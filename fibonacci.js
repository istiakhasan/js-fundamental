/* 
//0,1,1,2,3,5,8,13,21,34,55
3rd=2nd+1st
4th=3rd+2nd
5th=4th+3rd
4th=3rd+2nd
16=15th+14th
119th=118th+117th
nth=(n-1)th+(n-2)th
ith=(i-1)th+(i-2)th
fibonacci series er jonno 3rd index  thekey suru kortey hbe
*/

// const fibo=[0,1]
// for (let i=2;i<=10;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2]
// }
// console.log(fibo)


// function fibonacciSeries(num){
//     const fibo=num
//     for(let i=2;i<10;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2]
//     }
//     return fibo
// }

// const myfibo=fibonacciSeries([0,1])
// console.log("my series",myfibo)


function fibonacciSeries(num){
    if(typeof num !='number' ){
        return 'Please give a number'
    }
    if(num<2){
        return 'Please enter a positeive number gatter than 2 '
    }
    const fibo=[0,1]
    for(let i=2;i<=num;i++){
        fibo[i]=fibo[i-1]+fibo[i-2]
    }
    return fibo
}

const myfibo=fibonacciSeries(-10)
console.log(myfibo)

for(let i=0;i<100;i++){

    
    var robin=Math.floor(Math.random() * (200 - 100)) + 100
    console.log(robin)
}