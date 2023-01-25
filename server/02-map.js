const letters = [ 'a', 'b', 'c' ];
const newArray = [];
const newArray2 = letters.map( e => e + '--' );

for (let i = 0; i < letters.length; i++) {
    const element = letters[i];
    newArray.push(element + '++');
}

console.log(letters);
console.log(newArray);
console.log(newArray2);

// Calcula y agrega una nueva propiedad en un Array
const array1 = [
    {
        name: "Product 1",
        price: 1000,
        stock: 10
    },
    {
        name: "Product 2",
        price: 2000,
        stock: 20
    }
];
function addNewAttr(array) {
  const newA = array.map(e => {
    return {
        ...e,
        // taxes: Math.round(e.price * .19) // round aproxima al entero más cercano
        taxes: Math.trunc(e.price * .19) // trunc solo toma la parte entera
    }
  });
  return newA;
}
let result = addNewAttr(array1);
console.log(result);