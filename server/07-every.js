const numbers = [ 1, 30, 39, 29, 10, 13 ];

let resp1 = true;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if ( element >= 40 ) {
        resp1 = false;
    }
}
console.log( 'for', resp1 );

const resp2 = numbers.every( e => e < 40 );
console.log( 'every', resp2 );