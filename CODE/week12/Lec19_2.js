// PIGGYBANK (using function.call and function.apply)
function deposit(v) {
    console.log("deposit starts work");
    this.balance = this.balance + v;
    this.lt = v;
    console.log("deposit completes work");
}

function withdraw(v) {
    console.log("withdraw starts work");
    if(v <= this.balance){
        this.balance = this.balance - v;
        this.lt = -v;
    }else{
        console.log("err");
    }
    console.log("withdraw completes work");
}

function statement() {
    console.log("statement starts work");
    console.log("balance = " + this.balance);
    console.log("lt = " + this.lt);
    console.log("statement completes work");
}

var pg1 = {
    balance : 0,
    lt : 0,
    deposit : deposit,
    withdraw : withdraw,
    statement : statement
};


var pg2 = {
    balance : 0,
    lt : 0,
    deposit : deposit,
    withdraw : withdraw,
    statement : statement
};

deposit.call(pg1,10);
statement.apply(pg1);
withdraw.apply(pg1,[5]);
statement.call(pg1);

pg1.deposit(45);
withdraw.call(pg1,35);
pg1.statement();