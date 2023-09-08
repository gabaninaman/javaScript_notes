let htmlString = "";
let i=[10,20,30,40,50]
let a=0;
for ( let a =0; a <5; a=a+1)
{
    htmlString +=`<div>${i[a]}</div>`
   
} 
main.innerHTML = htmlString; 
console.log(htmlString);
