 //  LAMBDA(function literal)  //
// literal-values that are directly written in the source code
// ways of defining a function 1. by Name function(function declaration)  2. by anonymous function(function expression)
// illustrates the syntax of lambda
// also called ananyomous function
//two ways to write anayamous function are- 1. traditional syntax  2.arrow function syntax
// tradition syntax
let f1 = function(){
    console.log("entering lambta1");
    console.log("leaving lambda1");   
}
f1();

// arrow function syntax
let f2 =() => {
    console.log("entering lambta2");
    console.log("leaving lambda2");
}
f2();

 // name fucntion(functions which are declared) are hosisted to the top
 // you can call a name fuction before it is declared
 
 f3();
 function f3(){
    console.log("entering lambta3");
    console.log("leaving lambda3");
 };
