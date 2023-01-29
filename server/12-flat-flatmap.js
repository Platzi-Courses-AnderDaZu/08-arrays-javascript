const matriz = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9, [ 10, 11, 12, [ 13, 14, 15, [ 16, 17, 18 ] ] ] ]
];

const newArray = [];

for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        // const element = array[j];
        const element = matriz[i][j];
        newArray.push(element);
    }
}

// función para agregar elementos de arrays multidimencionales a un array
function arra(array, newA) {
    array.forEach( element => {
        if ( typeof element == 'object' ) {
            arra( element, newA );
        } else {
            newA.push( element );
        }
    });
}

const newArray2 = [];
arra( matriz, newArray2 );

// const newArray3 = matriz.flat(4);
const newArray3 = matriz.flat(Infinity);

console.log( { matriz, newArray, newArray2, newArray3 } );

const flatten = arr => {
    return arr.reduce( (a, b) => {
        return a.concat( Array.isArray(b) ? flatten(b) : b )
    }, []); 
};
flatten( [1, [2,3], [4,[5,[6]]]] ) // [1, 2, 3, 4, 5, 6]