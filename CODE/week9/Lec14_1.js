function PiggyBank()
{
    this.balance=0;
    this.lt=0;
    this.deposit=deposit;
    this.withdraw=withdraw;
    this.statement=statement;
}

function deposit(v){
    this.balance=this.balance+v;
    this.lt=v;
    return this;
}

function withdraw(v){
    if (this.balance >= v) {
        this.balance = this.balance - v;
        this.lt = -v;
    }
    return this;
}

function statement() {
    console.log("Balance = " + this.balance);
    console.log("Last Transction = " + this.lt);
    return this;
 }

 var pg1=new PiggyBank();
 pg1.deposit(100).withdraw(50).statement();

 var pg2=new PiggyBank();
 pg2.deposit(50).statement().withdraw(40).statement();

 var pg3=new PiggyBank();
 pg3.withdraw(10).statement().deposit(20).statement();