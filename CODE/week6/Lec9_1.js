// first step printing Nameste 5 times with long code
function n(v)
{
    if(v==0) return;
    if(v==1){
        console.log("Namaste");
    }
    if(v==2){
        console.log("Namaste");
        n(1);
    }
    if(v==3){
        console.log("Namaste");
        n(2);
    }
    if(v==4){
        console.log("Namaste");
        n(3);
    }
    if(v==5){
        console.log("Namaste");
        n(4);
    }
}
n(5);

console.log("1st code over");

// intermediate step for understanding code and process

function n(v)
{
    if(v==0) return;
    if(v==1){
        console.log("Namaste");
    }
    if(v==2){
        console.log("Namaste");
        n(1);
    }
    if(v==3){
        console.log("Namaste");
        n(2);
    }
    if(v==4){
        console.log("Namaste");
        n(3);
    }
    if(v==5){
        console.log("Namaste");
        n(4);
    }
}

n(5);
console.log("2nd code over");

// small code for repetition without loop using function
// this is a recursive solution
// this kind of task can be solved by recursion or by repetition(loops)
function n(v){
    if(v==0) return;
    console.log("namaste");
    n(v-1);
}

n(5);