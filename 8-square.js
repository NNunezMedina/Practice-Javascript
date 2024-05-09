#!/usr/bin/node
const size = "X";

function square (number) {
    if (!isNaN(number) && number > 0) {
        number = parseInt(number);
        for (let i = 0; i < number; i++) {
            console.log(size.repeat(number));
        }
    } else {
        console.log("Missing size");
    }
    }

square(-3);