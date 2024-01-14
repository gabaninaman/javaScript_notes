//  function.call

// function f1(v){
//     console.log("fucntion starts work");
//     console.log("function doning work");
//     console.log("v="+v);
//     console.log("function completes work");
// }

// f1.call(null,3);
// f1.call(this,3);
// f1.call(undefined,3);
// f1.call(0,3);

// exercise mor mental memory model

// suppose f1 is an function, and you are treating the function as an object and calling it with function call
// now f1.call is also considered as an function which can also be called by call function. 
function f1(v) {
    console.log("f1..." + v);
}
f1(4);
f1.call(null, 5);
f1.call.call(f1, null, 10);
f1.call.call.call(f1.call, f1, null, 20);
f1.call.call.call.call(f1.call.call, f1.call, f1, null, 30);

// //  function.apply

// function f1(v){
//     console.log("f1 starts work");
//     console.log("Doing Work");
//     console.log("v = " + v);
//     console.log("f1 completes work");
// }

// // f1.apply(null,[3]);
// // f1.apply(this,[3]);
// // f1.apply(undefined,[3]);
// // f1.apply(0,[3]);