#!/usr/bin/node
function add(a, b) {
    let resultado = 0;
    if (!isNaN(a) && !isNaN(b)) {
        resultado = a + b;
        console.log(resultado)
    } else {
        console.log(NaN)
    }
}
add();
add(1);
add(1, 7);
add(13, 89);