// (Every) function with array
let a=Array.of(10,20,30,40,50,60,70);
console.log(a);
let b=a.every(e=>e>0);
console.log(b);
let c=a.every(e=>e<0);
console.log(c);
let d=a.every(e=>e<100);
console.log(d);
let z=a.map(e=>e -50);
console.log(z);