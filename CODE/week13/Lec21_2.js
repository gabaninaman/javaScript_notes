//Object.setPrototypeOf
// in many runtime direct access to prototype is not permitted, so we cannot write __proto__= somenthing, JavaScript allows such thing

// let obj = {
//     a : 1,
//     b : 2
//  };
 
//  let parent = {
//     m : 11,
//     n : 22
//  };
 
//  console.log(obj);
//  console.log(parent);
//  Object.setPrototypeOf(obj,parent);
 
//  console.log(obj);
//  console.log(obj.__proto__);
//  console.log(obj.m);
//  console.log(obj.n);

// Object.create


let parent = {
   m : 11,
   n : 22
};
 
let obj = Object.create(parent)
console.log(obj);
console.log(parent);
console.log(obj.__proto__);
console.log(obj.m);
console.log(obj.n);