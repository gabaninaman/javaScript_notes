function my_bitwiseor(...a) {
    console.log("Entering my_bitwiseor function");
    var i = 0;
    var r = 0;
    while ( i < a.length){
        r |= a[i];
        i++;
    }
    console.log("Leaving my_bitwiseor function");
    return r;
 }
 
 let result = my_bitwiseor(0B0001,0b0010,0b0100,0b1000);
 
 console.log("The result is --> " + result);