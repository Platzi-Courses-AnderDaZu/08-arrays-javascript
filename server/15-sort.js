const months = [ 'March', 'January', 'February', 'December' ];
months.sort();

const numbers = [ 1, 30, 4, 21, 10000 ];
numbers.sort( ( a, b ) => a - b );

const words = [ 'reserve', 'premier', 'communique', 'cafe', 'adieu' ];
words.sort( ( a, b ) => a.localeCompare(b) );

const orders = [
    {
        customerName: 'Nico',
        total: 600,
        delivered: true,
        date: new Date( 2021, 1, 1, 15 )
    },
    {
        customerName: 'Ander',
        total: 750,
        delivered: true,
        date: new Date( 2021, 1, 2, 15 )
    },
    {
        customerName: 'Tani',
        total: 480,
        delivered: false,
        date: new Date( 2021, 1, 10, 15 )
    },
];
// orders.sort( (a,b) => a.total - b.total );
orders.sort( ( a, b ) => b.date - a.date );

console.log( { months, numbers, words, orders } );