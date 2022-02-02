const phones=[
    {name:'samsung s5',price:45000,camera:10,storage:32},
    {name:'walton m34',price:15000,camera:8,storage:5},
    {name:'shaomi',price:17000,camera:8,storage:2},
    {name:'nokia m34',price:14000,camera:8,storage:18},
    {name:'oppo m34',price:5000,camera:8,storage:83},
    {name:'HTC m34',price:25000,camera:8,storage:18},
];
let cheapest=phones[0]
for(const phone of phones){
    if(phone.price<cheapest.price){
        cheapest=phone
    }
}
console.log(cheapest)