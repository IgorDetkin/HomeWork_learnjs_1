let x = {};

function A() { 
    return x;
 }
function B() { 
    return x;
 }

let a = new A();
let b = new B();

alert( a == b ); // true


