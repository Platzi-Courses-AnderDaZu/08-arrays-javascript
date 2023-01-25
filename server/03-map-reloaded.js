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
        delivered: true
    },
];

const resp = orders.map( item => item.total );

console.log('resp2', resp);

// const resp2 = orders.map( item => {
//     item.tax = .19;
//     return item;
// } );

// console.log('resp ori', orders);
// console.log('resp new', resp2);

const resp3 = orders.map( item => {
    return {
        ...item,
        tax: .19
    };
} );

console.log('resp ori', orders);
console.log('resp new3', resp3);