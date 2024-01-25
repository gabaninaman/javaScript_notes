// // // PROPERTY DESCRIPTORS // // //





// Enurable
// var obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
//  }
 
//  console.log("Before");
 
//  for (let key in obj1) {
//     console.log("Key = " + key);
//     console.log("Value = " + obj1[key]);
//  }
  
//  Object.defineProperty(obj1, 'c', { value: 300, enumerable: false });
 
//  console.log("After");
 
//  for (let key in obj1) {
//     console.log("Key = " + key);
//     console.log("Value = " + obj1[key]);
//  }
 
//  console.log("c is now a non-enumerable property -> " + obj1.c);

 // the (for in) and (console) fucntion works with enruablity, so they cannot print the value of c
 // this does not mean that c is not there, you can still work with the value of c

 // Writable

//  var obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
//  }
 
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
//  obj1.a = 100;
//  obj1.b = 200;
//  obj1.c = 300;
 
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
//  Object.defineProperty(obj1, 'b', { value: 3555, writable: false });
 
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
//  obj1.a = 1000;
//  obj1.b = 2000;
//  obj1.c = 3000;
 
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
 
//  console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
//  console.log(Object.getOwnPropertyDescriptor(obj1, 'b'));
//  console.log(Object.getOwnPropertyDescriptor(obj1, 'c'));


// // Configurable

// var obj1 = {
//     a: 10,
//     b: 20,
//     c: 30
//  }
 
//  console.log("Before");
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
//  obj1.a = 100;
//  obj1.b = 200;
//  obj1.c = 300;
 
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
//  Object.defineProperty(obj1, 'a', {
//     value: 500,
//     configurable: false
//  });
//  console.log("After");
 
//  console.log("a = " + obj1.a);
//  console.log("b = " + obj1.b);
//  console.log("c = " + obj1.c);
 
//  // This will not work
//  // Once defined non configurable we cannot change property descriptors
//  // Comment this and try again
//  Object.defineProperty(obj1, 'a', {
//     value: 1000,
//     enumerable: true,
//     writable: true,
//     configurable: true
//  });
 
//  console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
//  console.log(Object.getOwnPropertyDescriptor(obj1, 'b'));
//  console.log(Object.getOwnPropertyDescriptor(obj1, 'c'));



// //  All
// var obj1 = {
//    a: 10,
//    b: 20,
//    c: 30
// }

// console.log("Before");
// console.log("a = " + obj1.a);
// console.log("b = " + obj1.b);
// console.log("c = " + obj1.c);

// obj1.a = 100;
// obj1.b = 200;
// obj1.c = 300;

// console.log("a = " + obj1.a);
// console.log("b = " + obj1.b);
// console.log("c = " + obj1.c);

// Object.defineProperty(obj1, 'a', {
//    value: 3,
//    enumerable: false,
//    writable: false,
//    configurable: false
// });


// // This is Equivalent to enumerable: false, writable: false, configurable: false
// // Object.defineProperty( obj1, 'a', { value: 3 });


// console.log("After");
// // It will not work for a
// obj1.a = 1000;
// obj1.b = 2000;
// obj1.c = 3000;

// console.log("a = " + obj1.a);
// console.log("b = " + obj1.b);
// console.log("c = " + obj1.c);

// // a will not be enumerable
// console.log("Looping")
// for (let key in obj1) {
//    console.log(key + " = " + obj1[key]);
// }

// // This will not work
// // Try to comment this and Run Again
// Object.defineProperty(obj1, 'a', {
//    value: 89,
//    enumerable: false,
//    writable: false,
//    configurable: false
// });

// console.log(Object.getOwnPropertyDescriptor(obj1, 'a'));
// console.log(Object.getOwnPropertyDescriptor(obj1, 'b'));
// console.log(Object.getOwnPropertyDescriptor(obj1, 'c'));

// // Defining get,set(not explained)

function Node(v,left,right){
   if(new.target != Node) return null;
   this._text  = typeof(v) === "string" ? v : null;
   this._left  = left instanceof Node ? left : null;
   this._right = right instanceof Node ? left : null;
}

Object.defineProperty(Node.prototype,"left",{
 get : function(){
     return this._left
   },
 set : function(v){
     this._left = v instanceof Node ? v : _left;
   }
});

Object.defineProperty(Node.prototype, "right", {
   get: function () {
       return this._right
   },
   set: function (v) {
       this._right = v instanceof Node ? v : _right;
   }
});


let n1 = new Node("html");
console.log(n1);
console.log(n1.left);
console.log(n1.right);
n1.left = new Node("head");
n1.right = new Node("body");
console.log(n1);