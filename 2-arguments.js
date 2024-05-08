#!/usr/bin/node
function argument(a, b, c) {
    if(typeof a === 'undefined' && typeof b === 'undefined' && typeof c==='undefined') {
        console.log("No argument");
    } else if (typeof b === 'undefined' && typeof c==='undefined') {
        console.log("Argument found");
    } else {
        console.log("Arguments found")
    }
}

argument("hola", "amigo", "mio");