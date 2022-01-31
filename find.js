var skycolor='white';
var phones=['iphone','shaomi','samsang','lg','htc']
if(phones.indexOf('oppo')==-1){
    console.log('opps! missing ')
}
if(phones.indexOf('shaomi') !=-1){
    console.log('lg is here')
}


var mahiya={mahi:'hate'}
mahiya["mahi"]='agnee 2'
console.log(mahiya)

var nums = [4, 5, 7, 6, 8, 2, 4, 1, 15];
console.log(nums.indexOf(6))
function getReminder(number1, number2) {
     number1 % number2;
   
  }
  
  const reminder = getReminder(12, 2);
  
  console.log(reminder);

  function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   
   console.log(typeof result)
   console.log( result)