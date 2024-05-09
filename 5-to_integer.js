#!/usr/bin/node

function toInteger(value) {
    if (value === undefined || value === null || typeof value === 'string' || isNaN(value)) {
        console.log("Not a number");
    } else {
        console.log(`My number: ${parseInt(value)}`);
    }
}

toInteger();
toInteger(89);
toInteger("89");
toInteger(89.43929);
toInteger(School);