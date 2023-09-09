//highest element of the array

var a=[1,2,30,40,55];
let b=0;
for(let i=0;i<5;i++)
{
    if(a[i]>b)
    {
        b=a[i]
    }
    else
    {
        b=b
    }
}
console.log("Highest number in the array is: "+b);