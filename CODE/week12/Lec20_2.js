let obj={
    a:1,
    b:2
 };
 
 function main(){
    f();
    console.log(f1.name);
    console.log(f.name);
    console.log(main.name);
 }
 
 function f1(){
    console.log(this.a);
    console.log(this.b);
 }
 
 let f = f1.bind(obj);
 main();
 