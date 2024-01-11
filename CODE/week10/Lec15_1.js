// functor which is enclosed in another function together with the closure object can be run properly

// when the function f2 is called independentely a closure object is created by javascript runtime containing the value of a and b
// if the nested function escapes it has a closure object
// if there are more nested function they share the same one closure object

function f1()
{
    console.log("entering f1");
    var a=1;
    var b=2;
    function f2(){
        console.log("entering f2");
        var c=3;
        var d=4;
        a++;
        b++;
        c++;
        d++;
        console.log("a="+a);
        console.log("b="+b);
        console.log("c="+c);
        console.log("d="+d);
        console.log("leaving f2");
    }
    console.log("a="+a);
    console.log("b="+b);
    return f2;
}
var f=f1();
f();
f();