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
