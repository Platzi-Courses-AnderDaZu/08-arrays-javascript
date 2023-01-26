const totals = [ 1, 2, 3, 4, 4, 1, 4 ];

let sum = 0;
for (let i = 0; i < totals.length; i++) 
{
    const element = totals[i];
    sum = sum + element;
}
console.log('resp 1', sum);

const resp2 = totals.reduce( (sum, element) => sum + element, 0 );
console.log('resp 2', resp2);

const obj = {};
const resp3 = totals.reduce( (sum, element, index, array) => {
    if ( obj[element] ) {
        obj[element] += 1;
    } else {
        obj[element] = 1;
    }
    // console.log( obj );
    return obj;
}, 0 );
console.log('obj 1', obj);

const resp4 = totals.reduce( (obj, element) => {
    if ( obj[element] ) {
        obj[element] += 1;
    } else {
        obj[element] = 1;
    }
    return obj;
}, {} );
console.log('obj 2', resp4);

const data = [
    {
        name: 'Nico',
        level: 'low'
    },
    {
        name: 'Kony',
        level: 'medium'
    },
    {
        name: 'Ander',
        level: 'hight'
    },
    {
        name: 'Ser',
        level: 'low'
    },
];
const levels = data.map( e => e.level );
const count = levels.reduce( (obj, e) => {
    if ( obj[e] ) {
        obj[e] += 1;
    } else {
        obj[e] = 1;
    }
    return obj;
}, {} );

const levels2 = Object.entries( data
.map( e => e.level )
.reduce( (obj, e) => {
    if ( obj[e] ) {
        obj[e] += 1;
    } else {
        obj[e] = 1;
    }
    return obj;
}, {} ) );
console.log(count);
console.log(levels2);

// Reto de agrupar numeros por rangos 

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,
9, 5, 1, 1, 4, 7, 7, 5, 3, 3, 6, 9, 8, 7, 5 ];

const numbers2 = [];

for (let i = 0; i < 30; i++) {
    numbers2.push(Math.floor(Math.random()*11));
}

const group1 = numbers.reduce( ( obj, e ) => {
    if ( e > 0 && e <= 5 ) {
        if ( obj['1-5'] ) {
            obj['1-5'] += 1;
        } else {
            obj['1-5'] = 1;
        }
    }
    if ( e > 5 && e <= 8 ) {
        if ( obj['6-8'] ) {
            obj['6-8'] += 1;
        } else {
            obj['6-8'] = 1;
        }
    }
    if ( e > 8 && e <= 10 ) {
        if ( obj['9-10'] ) {
            obj['9-10'] += 1;
        } else {
            obj['9-10'] = 1;
        }
    }
    return obj;
}, {} );
console.log('group 1', group1);

const group2 = numbers2.reduce( (obj, e) => {
    if ( e < 6 ) obj['1-5'] += 1;
    else if ( e < 9 ) obj['6-8'] += 1;
    else obj['9-10'] += 1; 
    return obj;
}, {
    '1-5': 0,
    '6-8': 0,
    '9-10': 0
} );
console.log('group 2', group2);