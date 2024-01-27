// // // // Let to compete(cannot execute code) // // // //



// // Creating Proxy
// var t= {                // t for target
//     a:10,
//     b:20
// };

// console.log(t.a);
// console.log(t.b);

// var h={};               // h for handler

// var proxy= new Proxy(t,h);

// console.log(proxy.a);
// console.log(proxy.b);


//  Trapping Get
// var t = {
//     a: 10,
//     b: 20
//  };
 
//  console.log(t.a);
//  console.log(t.b);
 
//  var h = {
//     get: (target, key) => {
//         console.log("Trying to Access -> " + key);
//         return target[key];
//     }
//  };
 
//  var proxy = new Proxy(t, h);
 
//  console.log(proxy.a);
//  console.log(proxy.b);


// Trapping Set
// var t = {
//    a: 10,
//    b: 20
// };

// var h = {
//    get: (target, key) => {
//        console.log("Trying to Access -> " + key);
//        return target[key];
//    },
//    set: (target, key, value) => {
//        console.log("Trying to Write -> " + key + " = " + value);
//        return target[key] = value;
//    }
// };

// var proxy = new Proxy(t, h);

// console.log(proxy.a);
// console.log(proxy.b);

// proxy.a = 100;
// proxy.b = 200;

// console.log(proxy.a);
// console.log(proxy.b);



// Validation

// var rabbit = {
//    age: 10
// };

// var h = {
//    get: (target, key) => {
//        console.log("Trying to Access -> " + key);
//        return target[key];
//    },
//    set: (target, key, value) => {
//        console.log("Trying to Write -> " + key + " = " + value);
//        if (key == "age" && value > 0) {
//            return target[key] = value;
//        }
//        console.log(`Cannot Change State of ${key} with ${value}`);
//    }
// };

// var prabbit = new Proxy(rabbit, h);

// console.log(prabbit.age);
// prabbit.age = 15;
// console.log(prabbit.age);

// prabbit.age = -10;


// Private Variables
// var rabbit = {
//    age: 10,
//    _height: 5
// };

// var h = {
//    get: (target, key) => {
//        console.log("Trying to Access -> " + key);
//        if (key == "_height") {
//            console.log(`Invalid attepmt for accessing private variable ${key}`);
//            return;
//        }
//        return target[key];
//    },
//    set: (target, key, value) => {
//        console.log("Trying to Write -> " + key + " = " + value);
//        if (key == "_height") {
//            console.log(`Invalid attepmt for writing to private variable ${key} with ${value}`);
//            return;
//        }
//        else if (key == "age" && value > 0) {
//            return target[key] = value;
//        }
//        console.log(`Cannot Change State of ${key} with ${value}`);
//    }
// };

// var prabbit = new Proxy(rabbit, h);

// console.log(prabbit.age);
// prabbit.age = 15;
// console.log(prabbit.age);

// prabbit.age = -10;


// console.log(prabbit._height);
// prabbit._height = 100;

// Trapping Function


// // Trapping Constructor


// function PiggyBank() {
//    this.balance = 0;
//    this.lt = 0;
// }
// const PiggyCount = {
//    objectCount: 0,
//    construct(target, args) {
//        console.log('PiggyBank Object Created');
//        this.objectCount++;
//        return new target(...args);
//    }
// };

// PiggyBank = new Proxy(PiggyBank, PiggyCount);

// let pg1 = new PiggyBank();
// console.log(pg1);
// let pg2 = new PiggyBank();
// console.log(pg2);
// let pg3 = new PiggyBank();
// console.log(pg3);

// console.log("Total Objects Created -> " + PiggyCount.objectCount);



// /