// Linear Searh of element of array Using FOR LOOP

let a =[10,20,30,40,50,60];
let b=10;
let i=0;
let flag=false;
for (let i=0;i<a.length;i++)
{
    if(b==a[i])
    {
        console.log("Number is found");
        flag=true;
        break;
    }

}
if(flag==false)
{
    console.log("Sorry Number is Not found:");
}