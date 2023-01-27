const pets = [ 'dog', 'cat', 'bat' ];

let resp1 = false;
for (let i = 0; i < pets.length; i++) {
    const element = pets[i];
    if ( element == 'dog' ) {
        resp1 = true;
        break;
    }
}
console.log( 'resp1', resp1 );

const resp2 = pets.includes( 'dog' );
console.log( 'resp2', resp2 );