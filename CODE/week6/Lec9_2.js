// finding factorial using iteration(loops)
let number = 3;

function factorial(n){
   let product = 1;
   for(let i = 1; i <= n ; i++){
       product = product * i;
   }
   return product;
}

let result = factorial(number);
console.log("Number is ",number);
console.log("Factorial is ",result);


// finding factorial using recursion
let num =4;

function Rfact(v){
    if(v==0)return 1;
    return v*Rfact(v-1);
}

let res =Rfact(num);
console.log("number is ",num);
console.log("factorial is ",res);