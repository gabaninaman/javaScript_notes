// CONSTRUCTOR //
function piggybank()
{
    this.balance=0;
    this.lt=0;
    this.deposit=deposit;
    this.withdraw=withdraw;
    this.statement=statement;
};

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
    console.log("Balance- "+this.balance);
    console.log("last transaction- "+this.lt);
}


var pg1=new piggybank();
var pg2=new piggybank();

pg1.deposit(10);
pg1.statement();
pg1.withdraw(10);
pg1.statement();

pg2.deposit(20);
pg2.statement();
pg2.withdraw(10);
pg2.statement();

