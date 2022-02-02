const name=['abul','babul','sabul','kabul','ebul','babul','fabul','fabul']
let duplicate=[]
for(Element of name){
   
    if(duplicate.indexOf(Element)==-1){
        duplicate.push(Element)
    }

}
console.log(duplicate)