// function isLeapYear(year){
//     if(year%4==0){
//         return true
//     }
//     return false
// }
function isLeapYear(year) {
    if (year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    return year % 4 === 0;
  }

const myYear=2100
const ismyYearLeapYear=isLeapYear(myYear)
console.log(ismyYearLeapYear)