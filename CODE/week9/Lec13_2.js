 // PIGGYBANK FACTORY //
// Try to print of the name of each piggybank in the statement


function factory()
{
    var pg={
        name:this.name,
        balance:0,
        lt:0,
        deposit:deposit,
        withdraw:withdraw,
        statement:statement
    };
    return pg;
}

function deposit(v){
    this.balance=this.balance+v;
    this.lt=v;
}

function withdraw(v){
    if(this.balance>=v){

    this.balance=this.balance-v;
    this.lt=-v;
        }
}

function statement(){
    console.log(this.name);
    console.log("Balance- "+this.balance);
    console.log("last transaction- "+this.lt);
}

var pg1=factory();
var pg2=factory();

pg1.deposit(10);
pg1.statement();
pg1.withdraw(10);
pg1.statement();

pg2.deposit(20);
pg2.statement();
pg2.withdraw(10);
pg2.statement();
