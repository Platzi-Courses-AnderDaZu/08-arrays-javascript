const products = [
    { title: 'Pizza', price: 120, id: '🍕' },
    { title: 'Burger', price: 120, id: '🍔' },
    { title: 'Hot cakes', price: 120, id: '🥞' },
];

const myProducts = [];

console.log( { products, myProducts } );
console.log('-'.repeat(10));

const productIndex = products.findIndex( e => e.id === '🍔' );

if ( productIndex != -1 ) {
    myProducts.push( products[productIndex] );
    products.splice(productIndex, 1);
}

console.log( { products, myProducts, productIndex } );
console.log('-'.repeat(10));

const products2 = products.filter( e => e.id != myProducts.id );

console.log( { products2 } );
console.log('-'.repeat(10));

// update
const products3 = [
    { title: 'Pizza', price: 120, id: '🍕' },
    { title: 'Burger', price: 120, id: '🍔' },
    { title: 'Hot cakes', price: 120, id: '🥞' },
];

const update1 = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
}

const productsIndex3 = products3.findIndex( e => e.id === update1.id );

products3[productsIndex3] = {
    ...products3[productsIndex3],
    ...update1.changes
};

console.log( { products3, update1 } );

const products4 = [
    { title: 'Pizza', price: 120, id: '🍕' },
    { title: 'Burger', price: 120, id: '🍔' },
    { title: 'Hot cakes', price: 120, id: '🥞' },
];

const update2 = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicious'
    }
};

const products5 = products4.map( e => {
    if ( e.id === update2.id ) {
        return {
            ...e,
            ...update2.changes
        }
    }
    return {
        ...e
    }
} );

console.log( { products4, update2, products5 } );