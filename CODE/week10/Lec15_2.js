var v1, v2;
function f1(){
    console.log("entering f1");
    var a =1;
    var b=2;
    var f2=function(){
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
    v1=f2;
   var f3 = function () {
       console.log("Entering f3");
       var e = 3;
       var f = 4;
       a++;
       b++;
       e++;
       f++;
       console.log("a = " + a);
       console.log("b = " + b);
       console.log("e = " + e);
       console.log("f = " + f);
       console.log("Leaving f3");
   }
   v2 = f3;
   console.log("a = " + a);
   console.log("b = " + b);
   console.log("Leaving f1");
}

f1();
v1();
v2();
v1();
v2();


