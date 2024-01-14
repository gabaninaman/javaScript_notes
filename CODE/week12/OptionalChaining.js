// var obj1 = {
//     x : 1,
//     y : 2
//  };
 
//  console.log(obj1);
//  console.log(obj1.x);
//  console.log(obj1?.x);
//  console.log(obj1?.k?.b);


var emp1 = {
    age : 21,
    name:
        {
            first : "amit",
            middle: "k",
            last :"desai"
        }
 };
 
 var emp2 = {
    age: 31,
 };
 
 console.log(emp1.name.last);
 console.log(emp1?.name?.last);
 console.log(emp2?.name?.last);
 console.log(emp2.getSalary?.());