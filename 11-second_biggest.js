#!/usr/bin/node

function biggestNumber(value) {
    if (value === undefined || value === 1) {
        console.log(0)
    } else {
        let mayorNumber = Math.max(value)
        console.log(mayorNumber);
    }
}

biggestNumber();
biggestNumber(1);
biggestNumber(4, 2, 5, 3, 0, -3)
