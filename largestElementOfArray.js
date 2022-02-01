function largestElement(numbers){
         let largest=numbers[0];
         for(let i=0;i<numbers.length;i++){
             const element=numbers[i]
              if(element>largest){
                  largest=element
              }
         }
         return largest
}


const oldest=largestElement([12,3,8,20])
const oldest2=largestElement([-1,-23,-12,1])
console.log(oldest2)
console.log(oldest)