// //  1. Procedural-Tight Coupling

// var st1=10;
// var stk1=new Array(10);

// function push1(v) {
//     if(st1===0){
//         console.log("stack overflow");
//     }
//     else{
//         st1=st1-1;
//         stk1[st1]=v;
//     }
// }
// function pop(){
//     if(st1===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=stk1[st1];
//         st1=st1+1;
//         return temp;
//     }
// }

// function print1(){
//     console.log("printing stack");
//     for (var i=st1; i<10; i++){
//         console.log(stk1[i]);
//     }
// };

// push1(10);
// push1(20);
// push1(30);
// push1(10);
// push1(20);
// push1(30);
// push1(10);
// push1(20);
// push1(30);
// push1(10);
// push1(20); // this is the one 11th element so the stack will overflow only once.
// print1();

// var st2=10;
// var stk2=new Array(10);

// function push2(v){
//     if (st2===0) {
//         console.log("stack overflow");
//     }
//     else{
//         st2=st2-1;
//         stk2[st2]=v;
//     }
// }

// function pop2(){
//     if(st2===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp= stk2[st2];
//         st2=st2+1;
//         return temp;
//     }
// }

// function print2(){
//     console.log("printing stack");
//     for(var i=st2; i<10; i++){
//         console.log(stk2[i]);
//     }
// };

// push2(22);
// push2(33);
// push2(44);
// print2();

// var v=pop2();

// console.log("last value popped in s2 is "+ v);
// print2();

// // 2. Procedural- Loose Coupling

// function push (st, stk, v){
//     if(st[0]===0){
//         console.log("stack overflow");
//     }
//     else{
//         st[0]=st[0]-1;
//         stk[st[0]]=v;
//     }
// }

// function pop(st, stk){
//     if (st[0]===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=stk[st[10]];
//         st[0]=st[0]+1;
//         return temp;
//     }
// }

// function print(st, stk){
//     console.log("printing stack");
//     for( var i=st[0]; i<10; i++){
//         console.log(stk[i]);
//     }
// };

// var st1=[10];
// var stk1= new Array(10);

// push(st1, stk1, 10);
// push(st1, stk1, 20);
// push(st1, stk1, 30);
// print(st1,stk1);

// var st2=[10];
// var stk2= new Array(10);

// push(st2, stk2, 22);
// push(st2, stk2, 33);
// push(st2, stk2, 44);
// print(st2, stk2);

// var v=pop(st2,stk2);
// var v=pop(st2,stk2);
// var v=pop(st2,stk2);
// var v=pop(st2,stk2);


// console.log("last value popped in s2 is = "+v);
// print(st2, stk2);

// // 3. Procedural - Composite Variable

// function push(s, v){
//     if(s.st===0){
//         console.log("stack overflow");
//     }
//     else{
//         s.st=s.st-1;
//         s.stk[s.st]=v;
//     }
// }

// function pop(s){
//     if(s.st===0){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=s.stk[s.st];
//         s.st=s.st+1;
//         return temp;
//     }
// }

// function print(s){
//     console.log("printing stack");
//     for(var i=s.st; i<10; i++){
//         console.log(s.stk[i]);
//     }
// };

// var s1={
//     st:10,
//     stk:new Array(10)
// };

// push(s1, 10);
// push(s1, 20);
// push(s1, 30);
// print(s1);

// var s2={
//     st:10,
//     stk:new Array(10)
// };

// push(s2, 11);
// push(s2, 22);
// push(s2, 33);
// print(s2);

// var v= pop(s2);
// console.log("last value popped is = "+v);
// print(s2);

// // 4. Object

// function push(v) {
//     if(this.st===0){
//         console.log("stack overflow");
//     }
//     else{
//         this.st=this.st-1;
//         this.stk[this.st]=v;
//     }
// }

// function pop(){
//     if(this.st===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=this.stk[this.st];
//         this.st=this.st+1;
//         return temp;
//     }
// }

// function print(){
//     console.log("printing stack");
//     for(var i= this.st; i<10; i++){
//         console.log(this.stk[i]);
//     }
// };

// var s1= {
//     st:10,
//     stk: new Array(10),
//     push:push,
//     pop:pop,
//     print:print
// };
// s1.push(10);
// s1.push(20);
// s1.push(30);
// s1.print();

// var s2={
//     st:10,
//     stk:new Array(10),
//     push:push,
//     pop:pop,
//     print:print
// };

// s2.push(11);
// s2.push(22);
// s2.push(33);
// s2.print();
// var v=s2.pop();
// console.log("the last value popped is = "+v);
// s2.print();

// // 5. Factory

// function push(v){
//     if(this.st===0){
//         console.log("stack overflow");
//     }
//     else{
//         this.st=this.st-1;
//         this.stk[this.st]=v;
//     }
// }

// function pop(){
//     if(this.st===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=this.stk[this.st];
//         this.st=this.st+1;
//         return temp;
//     }
// }

// function print(){
//     console.log("printing stack");
//     for(var i=this.st; i<10;i++){
//         console.log(this.stk[i]);
//     }
// };

// function mystackfactory(){
//     var obj={
//         st:10,
//         stk:new Array(10),
//         push:push,
//         pop:pop,
//         print:print
//     };
//     return obj;
// }

// var s1= mystackfactory();
// s1.push(10);
// s1.push(20);
// s1.push(30);
// s1.print();
// var s2= mystackfactory();
// s2.push(11);
// s2.push(22);
// s2.push(33);
// s2.print();
// var v=s2.pop();

// console.log("last value popped is = "+v);
// s2.print();

// // 6. Constructor.. 
// // In JavaScript a constructor is called when an object is created using the new keyword.

// function push(v){
//     if(this.st===0){
//         console.log("stack overflow");
//     }
//     else{
//         this.st=this.st-1;
//         this.stk[this.st]=v;
//     }
// }

// function pop(){
//     if(this.st===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=this.stk[this.st];
//         this.st=this.st+1;
//         return temp;
//     }
// }

// function print() {
//     console.log("Printing Stack");
//     for (var i = this.st; i < 10; i++) {
//         console.log(this.stk[i]);
//     }
//  };

//  function MyStack(){
//     this.st=10;
//     this.stk=new Array(10);
//     this.push=push;
//     this.pop=pop;
//     this.print=print;
//  }

//  var s1=new MyStack();
//  s1.push(10);
//  s1.push(20);
//  s1.push(30);
// s1.print();

// var s2= new MyStack();
// s2.push(11);
// s2.push(22);
// s2.push(33);
// s2.print();

// var v=s2.pop();
// console.log("last value popped is = "+v);
// s2.print();


// // 7. Inheritance-using base

// function push(v){
//     if(this.st===0){
//         console.log("stack overflow");
//     }
//     else{
//         this.st=this.st-1;
//         this.stk[this.st]=v;
//     }
// }

// function pop(){
//     if(this.st===0){
//         console.log("stacak underflow");
//     }
//     else{
//         var temp=this.stk[this.st];
//         this.st=this.st+1;
//         return temp;
//     }
// }

// function print(){
//     console.log("printitng stack");
//     for(var i=this.st; i<10; i++){
//         console.log(this.stk[i]);
//     }
// };

// var base={};
// base.push=push;
// base.pop=pop;
// base.print=print;

// function MyStack(){
//     this.st=10;
//     this.stk=new Array(10);
//     this.__proto__=base;
// }

// var s1=new MyStack();
// s1.push(10);
// s1.push(20);
// s1.push(30);
// s1.print();

// var s2= new MyStack();
// s2.push(10);
// s2.push(20);
// s2.push(30);
// s2.print();
// var v=s2.pop();
// console.log("last value popped is = "+v);
// s2.print();

// // 8. Inheritance- using prototype

// function MyStack(){
//     this.st=10;
//     this.stk= new Array(10);
// }

// MyStack.prototype.push=function(v){
//     if(this.st===0){
//         console.log("stack overflow");
//     }
//     else{
//         this.st=this.st-1;
//         this.stk[this.st]=v;
//     }
// };

// MyStack.prototype.pop=function(){
//     if(this.st===10){
//         console.log("stack underflow");
//     }
//     else{
//         var temp=this.stk[this.st];
//         this.st=this.st+1;
//         return temp;
//     }
// };

// MyStack.prototype.print= function(){
//     console.log("printing stack");
//     for(var i=this.st; i<10; i++){
//         console.log(this.stk[i]);
//     }
// };

// var s1=new MyStack();
// s1.push(10);
// s1.push(20);
// s1.push(30);
// s1.print();

// var s2= new MyStack();
// s2.push(11);
// s2.push(22);
// s2.push(33);
// s2.print();
// var v=s2.pop();
// console.log("las value popped is = "+v);
// s2.print();

// 9. Private Idiom

function MyStack(){
    st=10;
    stk=new Array(10);
    function push(v){
        if(st==0){
            console.log("stack overflow");
        }
        else{
            st=st-1;
            stk[st]=v;
        }
    }
    function pop(){
        if(st===10){
            console.log("stack underflow");
        }
        else{
            var temp=stk[st];
            st=st+1;
            return temp;
        }
    }

    function print(){
        console.log("printing stack");
        for(var i=st; i<10; i++){
            console.log(stk[i]);
        }
    }
    this.push=push;
    this.pop=pop;
    this.print=print;
}

var s1= new MyStack();
s1.push(10);
s1.push(20);
s1.push(30);
s1.print();

var s2=new MyStack();
s2.push(11);
s2.push(22);
s2.push(33);
s2.print();
var v=s2.pop();
console.log("last value popped is = "+v);
s2.print();