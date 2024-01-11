// // We are a software company and we provide services to clients.
// // The servies provide by us include 3 code doing some tasks for the client. 
// // All the 3 task are on a server and the clients access the server to complete their tasks using our code. 

// // client server setup
// console.log("Welcome to Higher Order Functions");

// function Server() {
//    console.log("Task 1");
//    console.log("Task 2");
//    console.log("Task 3");
// }

// function Client1() {
//    console.log("Entering Client1");
//    Server();
//    console.log("Leaving Client1");
// }

// function Client2() {
//    console.log("Entering Client2");
//    Server();
//    console.log("Leaving Client2");
// }

// Client1();
// Client2();

// If a client may not be satisfied with one of the code doing some task, he may ask to change one of the code on the server according to his needs. 
// But this may not be possible as other client may be affected by the change. 
// And not to provide harsh services the company should tailor the code to everyones satisfactions.
// The solution is Customization 

//Client Server Customization

// console.log("Welcome to Higher Order Functions");

// function Server(v) {
//    console.log("Task 1");
//    switch (v) {
//        case 0: console.log("Task 2 - v1");
//            break;
//        case 1: console.log("Task 2 - v2");
//            break;
//        default: console.log("Task 2");

//    }
//    console.log("Task 3");
// }

// function Client1() {
//    console.log("Entering Client1");
//    Server(0);
//    console.log("Leaving Client1");
// }

// function Client2() {
//    console.log("Entering Client2");
//    Server(1);
//    console.log("Leaving Client2");
// }

// function Client3() {
//    console.log("Entering Client3");
//    Server();
//    console.log("Leaving Client3");
// }

// Client1();
// Client2();
// Client3();

// In real world this solution is not scalable as this solution would incresase the load on the server if every client demanded customization


// Customization Client Server-Using Callback


// function Server(v) {
//    console.log("Task 1");
//    switch (v) {
//        case 0: m1();
//            break;
//        case 1: m2();
//            break;
//        default: console.log("Task 2");

//    }
//    console.log("Task 3");
// }

// function m1(){
//    console.log("Task 2 for Client 1");
// }
// function m2(){
//    console.log("Task 2 for Clinet 2");
// };

// function Client1() {
//    console.log("Entering Client1");
//    Server(0);
//    console.log("Leaving Client1");
// }

// function Client2() {
//    console.log("Entering Client2");
//    Server(1);
//    console.log("Leaving Client2");
// }

// function Client3() {
//    console.log("Entering Client3");
//    Server();
//    console.log("Leaving Client3");
// }

// Client1();
// Client2();
// Client3();
// // This solution takes more code out of function Server and decreases the load on the server



// Further Improving the Design of the Code

// console.log("Welcome to Higher Order Functions");

// function Server(f=v) {
//    console.log("Task 1");
//    f();
//    console.log("Task 3");
// }

// function v1(){
//    console.log("Task 2 for Client 1");
// }
// function v2(){
//    console.log("Task 2 for Clinet 2");
// };
// function v(){
//    console.log("Task 2");
// };


// function Client1() {
//    console.log("Entering Client1");
//    Server(v1);
//    console.log("Leaving Client1");
// }

// function Client2() {
//    console.log("Entering Client2");
//    Server(v2);
//    console.log("Leaving Client2");
// }

// function Client3() {
//    console.log("Entering Client3");
//    Server(v);
//    console.log("Leaving Client3");
// }

// Client1();
// Client2();
// Client3();


// // Further Simplification(Variant 1)

// function Server(f) {
//    console.log("Task 1");
//    f();
//    console.log("Task 3");
// }

// function Client1() {
//    console.log("Entering Client1");
//    Server(
//       function(){
//          console.log("Task 2 for Client 1");
//       }
//    );
//    console.log("Leaving Client1");
// }

// function Client2() {
//    console.log("Entering Client2");
//    Server(
//       function(){
//          console.log("Task 2 for clinet 2");
//       }
//    );
//    console.log("Leaving Client2");
// }

// function Client3() {
//    console.log("Entering Client3");
//    Server(
//       function(){
//          console.log("Task 2");
//       }
//    );
//    console.log("Leaving Client3");
// }

// Client1();
// Client2();
// Client3();

// // Further Simplification(Variant 2 (arrow function))

// function Server(f) {
//    console.log("Task 1");
//    f();
//    console.log("Task 3");
// }

// function Client1() {
//    console.log("Entering Client1");
//    Server(
//       () => {
//          console.log("Task 2 for Client 1");
//       }
//    );
//    console.log("Leaving Client1");
// }

// function Client2() {
//    console.log("Entering Client2");
//    Server(
//       () => {
//          console.log("Task 2 for clinet 2");
//       }
//    );
//    console.log("Leaving Client2");
// }

// function Client3() {
//    console.log("Entering Client3");
//    Server(
//       () => {
//          console.log("Task 2");
//       }
//    );
//    console.log("Leaving Client3");
// }

// Client1();
// Client2();
// Client3();

// // The goal is the customize and simplify function Server. By using these steps the server is now simplified.