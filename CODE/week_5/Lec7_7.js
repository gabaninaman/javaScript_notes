// for printing arrays with holes
var a =[10,20,30,40,50,60,70];
// array in java script is extensible therefore
a[9]=90;
// print array using for-in loop
for (var i in a)
{
    console.log("i="+i);
    console.log("a["+i+"]= "+a[i]);
}


// print array using for-of loop
for (let v of a)
{
    console.log(v);
}