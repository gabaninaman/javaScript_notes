let obj1 = {
    a: 10,
    b: 20
 };
 
 let obj2 = {
    c: 30,
    d: 40
 };
 
 let obj4 = {
    g: 50,
    h: 60
 };
 
 obj2.__proto__ = obj1;
 obj4.__proto__ = obj2;
 
 console.log("OBJ1");
 console.log(obj1.a);
 console.log(obj1.b);
 
 console.log("OBJ2");
 console.log(obj2.a);
 console.log(obj2.b);
 console.log(obj2.c);
 console.log(obj2.d);
 
 console.log("OBJ4");
 console.log(obj4.a);
 console.log(obj4.b);
 console.log(obj4.c);
 console.log(obj4.d);
 console.log(obj4.g);
 console.log(obj4.h);