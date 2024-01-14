// PUSH AND POP

// let a=[];
// console.log(a);
// a.push(10);
// a.push(20,30,40);
// console.log(a);
// let b=[2,3,4];
// a.push(...b);
// console.log(a);
// // let c=a.pop();
// // console.log(c);
// console.log(a.pop(["4","3"]));
// console.log(a);


// // SHIFT AND UNSHIFT

// let a=[];
// console.log(a);
// a.unshift(10);
// a.unshift(20,30,40);
// console.log(a);
// let b=[2,3,4];
// a.unshift(...b);
// console.log(a);
// let c=a.shift();
// console.log(c);
// a.shift();
// console.log(a);


//     In both cases watch the difference in orientation of the new elements in the array. 



// Shift and Unshift : Not cheap operations, since index will need to be changed.

// Very difficult to make it Omega1.

 

// So Suppose you want to implement Queue : FIFO

// How to achiveve  Queue : Combination of one of below

// Push & Shift

// Unshift & PoP

// Array is a DEQUE (Qouble Ended Queue) data-structure:


var a= Array.of(10,20,30,40,50,60,70);
a.forEach(x=>console.log(x));
console.log("-------");

a.slice(1,3).forEach(x=>console.log(x));
console.log("-------");
a.slice(0,4).forEach(x=>console.log(x));
console.log("-------");
a.slice(4).forEach(x=>console.log(x));
console.log("-------");
a.slice(-3,-1).forEach(x=>console.log(x));
console.log("-------");

var b=a.splice(2,5);
console.log(a);
console.log(b);


// Slicing : New array is created after cutting.

// Splicing : Actually that array will get cut-out.