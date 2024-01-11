var amit ={
    a:10,
    b:20
};

// console.log(amit);
// console.log(amit.a);
// console.log(amit.b);

var moti={
    m:30,
    n:40
};

var sonu={
    c:50,
    d:60
};

// console.log(moti);
// console.log(moti.m);
// console.log(moti.n);

amit.dost =moti;
moti.dost=sonu;
sonu.dost=amit;

// console.log(amit);
// console.log(amit.dost);
// console.log(amit.dost.m);
// console.log(amit.dost.n);

console.table(amit);
console.table(moti);
console.table(sonu);

console.log(moti.dost.dost.b)