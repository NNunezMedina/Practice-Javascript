#!/usr/bin/node
const sentence = "C is fun"; 

function printSentence(number) {
    if (!isNaN(number) && number > 0) {
        number = parseInt(number);
        for (let i = 0; i < number; i++) {
            console.log(sentence);
        }
    } else {
        console.log("Missing number of occurrences");
    }
}

printSentence(2);
printSentence(5);
printSentence();
printSentence(-3);

