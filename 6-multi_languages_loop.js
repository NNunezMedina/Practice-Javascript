#!/usr/bin/node
const sentences = [
    "C is fun",
    "Python is cool",
    "Javascript is amazing"
]

function loop() { 
    for (i =0; i < sentences.length; i++) {
        console.log(sentences[i])
    }
}
loop();