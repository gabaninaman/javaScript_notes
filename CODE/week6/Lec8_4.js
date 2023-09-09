function sum(...a)
{
    let r=0;
    console.log("Entering function");
    for (let i=0;i<a.length;i++)
    {
        r=r+a[i];
    }
    console.log("leaving function");
    return r;
}

let result =sum(10,20,30,40);
console.log("the sum is-->"+result);