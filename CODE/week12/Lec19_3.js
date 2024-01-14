
// function f1(){
//     console.log("function has no paramater");
// }


// function f2(a){
//     console.log("function has one paramater");
//     console.log("a=="+a);
// }


// function f3(a,b){
//     console.log("function has two paramater");
//     console.log("a=="+a);
//     console.log("a=="+b);

// }


// function f4(a,b,...c){
//     console.log("function has three paramater");
//     console.log("a=="+a);
//     console.log("a=="+b);
//     console.log("a=="+c);
// }

// console.log("f1 length-"+f1.length);
// console.log("f2 length-"+f2.length);
// console.log("f3 length-"+f3.length);
// console.log("f4 length-"+f4.length);

// // only prints fixed parameters and ignores rest parameters(...c)


// arrow functions are the only function when envoked Activiation Record creaated does not have this pointer
var a={
    v:console.log("hello"),
    f1:f1
}

var b={
    v:console.log("hello"),
    f1:f1
}


function f1(){
    console.log("........");
    var r=()=>{
        console.log(".........");
        console.log(this.a);
    }
    return r;
}

// But the arrow function contains this. Now, this in the arrow function is actually this of the main function f1 and not the arrow function.