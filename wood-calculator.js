/* 
chairwood=3cft/chair
tablewood=10cft/table
bedwood=50cft/bed
*/


function woodCalculator(chairQuantity,tableWuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;
  const chairWoodQuantity=chairQuantity*perChairWood;
  const tableWoodQuantity=tableWuantity*perTableWood;
  const bedWoodQuantity=bedQuantity*perBedWood;

  const totalWood=chairWoodQuantity + tableWoodQuantity + bedWoodQuantity
  return totalWood
}

const firstOption=woodCalculator(1,1,1)
console.log(firstOption)