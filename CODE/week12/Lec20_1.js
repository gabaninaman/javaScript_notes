
/// Simple example using components like this. , objects, call

// let obj1={
//     a:1,
//     b:2
// }

// function f1(obj){
//     console.log(this.a);
//     console.log(this.b);
// };

// let obj2={
//     a:11,
//     b:22
// }

// // function f2(){
// //     console.log(obj2.a);
// //     console.log(obj2.b);
// // };

// f1(obj1);
// f1.call(obj2);

let obj1={
    a:1,
    b:2,
    f1:f1
}

function f1(){
    console.log(this.a);
    console.log(this.b);
};

let obj2={
    a:11,
    b:22,
    f1:f1
}

let f =f1.bind(obj1);
let g =f1.bind(obj2);
f();
g();
