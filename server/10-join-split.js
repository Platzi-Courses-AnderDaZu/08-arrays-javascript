const elements = [ 'Fire', 'Air', 'Water' ];

const separator = '--';
let resp1 = '';
for (let i = 0; i < elements.length; i++) 
{
    const element = elements[i];
    if ( i == ( elements.length -1 ) ) 
    {
        resp1 = resp1 + element ;
        break;
    }
    resp1 = resp1 + element + separator;
}
console.log( 'resp1', resp1 );

const resp2 = elements.join('--');
console.log( 'resp2', resp2 );

const title = 'Curso de manipulación de arrays';
const url = title.split(' ').join('-').toLowerCase();
console.log( 'title', title );
console.log( 'url', url );