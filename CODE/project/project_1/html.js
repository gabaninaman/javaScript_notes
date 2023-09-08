alert("Hello, sir");
const main = document.querySelector('main');


let htmlString = "";
let i=[10,20,30,40,50,60,70,80,90,100];
let a=0;
for ( let a =0; a <10; a=a+1)
{
    htmlString +=`<div>${i[a]}</div>`;
}

main.innerHTML = htmlString; 
console.log(htmlString);




