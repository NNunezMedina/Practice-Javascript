#!/usr/bin/node
function argument(value) {
    if(value === undefined) {
        console.log("No argument")
    } else {
        console.log(value);
    }
}

argument("hola");