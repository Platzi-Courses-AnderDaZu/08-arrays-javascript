const words = [ 'spray', 'limit', 'elite', 'exuberant', 'Anderson' ];

const newArray1 = [];
for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if ( element.length >= 6 ) {
        newArray1.push(element);
    }
}

const newArray2 = words.filter( e => e.length >= 6 );

// console.log(words);
// console.log(newArray1);
// console.log(newArray2);

const orders = [
    {
        customerName: 'Ander',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Klar',
        total: 40,
        delivered: true
    },
    {
        customerName: 'Tani',
        total: 70,
        delivered: false
    },
    {
        customerName: 'Adel',
        total: 35,
        delivered: true
    },
    {
        customerName: 'Nati',
        total: 55,
        delivered: false
    },
];

// const delivered = orders.filter( e => e.delivered == true );
const resp1 = orders.filter( e => e.delivered );
const resp2 = orders.filter( e => e.delivered && e.total > 55 );

const search = (query) => {
    return orders.filter( e => {
        return e.customerName.includes(query);
    } );
}

console.log(orders);
console.log(resp1);
console.log(resp2);
console.log( search('an') );