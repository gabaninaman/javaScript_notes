// deleting property

var obj={
    a:10,b:20
};
console.log(obj);
console.log(obj.a);
console.log(obj.b);

obj.c =30;
console.log(obj.c);

console.log(obj);

delete obj.c;
console.log(obj);