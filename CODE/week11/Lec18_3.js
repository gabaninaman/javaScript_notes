// REVERSING THE ARRAY

let a= Array.of(10,20,30,40,50,60,70);
console.log("printing the original array");
console.log(a);
a.reverse();
console.log("printing the reversed array");
console.log(a);
let b=a.reverse();
if(a==b){
    console.log("b is...",b);
}
a.reverse().forEach(e=>console.log(e));