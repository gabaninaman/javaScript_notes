// using bracket notation
cat=10;

var obj = {
    a:cat,
    b:20
};

console.log(obj);
console.log(obj['a']);
console.log(obj['b']);
// let m='b';
// delete obj[m];
delete obj['b'];
console.log(obj);
