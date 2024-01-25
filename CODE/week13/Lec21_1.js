// Meta programming provides these functions
// CRUD
// Create property in an object
// read property in an object
// update property in an object
// Delete property in an object
// Thses are bascis facilities of 

// JavaScript objects are extensible
// but the extensiblity can be stopped

// // Object extension
// let obj = {
//     a : 1,
//     b : 2
//  };
 
//  console.log(obj);
//  console.log(Object.isExtensible(obj));
 
//  obj.c = 3;
//  console.log(obj);
 
//  Object.preventExtensions(obj);
//  console.log(Object.isExtensible(obj));
 
//  obj.d = 4;
//  console.log(obj);
 
//  delete obj.a;
//  console.log(obj);
 
 // prevent extension does not allow to add a property, but allows to delete an property

// // Object Seal
//  let obj = {
//     a : 1,
//     b : 2
//  };
 
//  console.log(obj);
//  console.log(Object.isSealed(obj));
 
//  obj.c = 3;
//  console.log(obj);
 
//  Object.seal(obj);
//  console.log(Object.isSealed(obj));
 
//  obj.d = 4;
//  console.log(obj);
 
//  delete obj.a;
//  console.log(obj);


// //Object Seal
// let obj = {
//     a : 1,
//     b : 2
//  };
 
//  console.log(obj);
//  console.log(Object.isSealed(obj));
 
//  obj.c = 3;
//  console.log(obj);
 
//  Object.seal(obj);
//  console.log(Object.isSealed(obj));
 
//  obj.a= 4;
//  console.log(obj);
 
//  delete obj.a;
//  console.log(obj);


// // Object Freeze
//  let obj = {
//     a : 1,
//     b : 2
//  };
 
//  console.log(obj);
//  console.log(Object.isFrozen(obj));
 
//  obj.c = 3;
//  console.log(obj);
 
//  Object.freeze(obj);
//  console.log(Object.isFrozen(obj));
 
//  obj.d = 4;
//  console.log(obj);
 
//  delete obj.a;
//  console.log(obj);
 
//  obj.b = 200;
 
//  console.log(obj.b);


//                         C   R   U   D
//    NORMAL               Y   Y   Y   Y
//    preventExtensions    N   Y   Y   Y
//    SEAL                 N   Y   Y   N
//    FREEZE               N   Y   N   N