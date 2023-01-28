const elements = [ 1, 2, 3, 4, 5 ];
const otherElements = [ 6, 7, 8, 9, 10 ];

const resp1 = [ ...elements, ...otherElements ];

const resp2 = [ ...elements ];

for (let i = 0; i < otherElements.length; i++) {
    const element = otherElements[i];
    resp2.push(element);
}

const resp3 = elements.concat(otherElements);

console.log( { elements, otherElements, resp1, resp2, resp3 } );

elements.push( ...otherElements ); // para agregar elementos de un array a otro array

console.log( { elements, otherElements, resp1, resp2, resp3 } );