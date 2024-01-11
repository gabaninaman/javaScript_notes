let balance =0;
let lt=0;

function deposit(v){
    if(v>0){
        balance+=v;
        lt=v;
    }
}

function withdraw(v){
    if(v>0 && v<=balance){
        balance-=v;
        lt=-v;
    }
}

function statement() {
    console.log("Balance: " + balance);
    console.log("Last Transaction: " + lt);
 }
 
 deposit(100);
 statement();
 withdraw(50);
 statement();