const numbers = [ 1, 5, 9, 15, 46, 7, 30, 40 ];

let resp1 = undefined;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if ( element == 40 ) {
        resp1 = element;
        break;
    }
}
console.log( 'resp1', resp1 );

const resp2 = numbers.find( e => e == 40 );
console.log( 'resp2', resp2 );

const products = [
    {
        name: 'Pizza',
        price: 250,
        id: '🍕'
    },
    {
        name: 'Hot Dog',
        price: 320,
        id: '🌭'
    },
    {
        name: 'Burger',
        price: 350,
        id: '🍔'
    },
];

const resp3 = products.find( e => e.id == '🍔' );
console.log( 'resp3', resp3 );

const resp4 = products.findIndex( e => e.id == '🍟' );
console.log( 'resp4', resp4 );