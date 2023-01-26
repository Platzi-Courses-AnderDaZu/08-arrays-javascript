const numbers = [ 1, 3, 3, 5 ];

let resp1 = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if ( element % 2 === 0 ) {
        resp1 = true;
        break;
    }
}
console.log(resp1);

const resp2 = numbers.some( e => e % 2 === 0 );
console.log(resp2);

const orders = [
    {
        customerName: 'Ander',
        total: 60,
        delivered: false
    },
    {
        customerName: 'Klar',
        total: 40,
        delivered: false
    },
    {
        customerName: 'Tani',
        total: 70,
        delivered: false
    },
    {
        customerName: 'Adel',
        total: 35,
        delivered: false
    },
    {
        customerName: 'Nati',
        total: 55,
        delivered: false
    },
];

const resp3 = orders.some( e => e.delivered );
console.log(resp3);

const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        enddate: new Date(2021, 1, 1, 11, 30),
        title: 'Cita de trabajo'
    },
    {
        startDate: new Date(2021, 1, 1, 13),
        enddate: new Date(2021, 1, 1, 14),
        title: 'Cita con jefe'
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        enddate: new Date(2021, 1, 1, 16),
        title: 'Cita de ceba'
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        enddate: new Date(2021, 1, 1, 21),
        title: 'Cita de reencuentro'
    },
];

const newDate = {
    startDate: new Date(2021, 1, 1, 21),
    endDate: new Date(2021, 1, 1, 21, 30)
}

const areIntervalsOvelapping = require('date-fns/areIntervalsOverlapping');

const isOverlap = ( newDate ) => {
    return dates.some( date => {
        return areIntervalsOvelapping(
            { start: date.startDate, end: date.enddate },
            { start: newDate.startDate, end: newDate.endDate }
        );
    } );
}

console.log( 'isOverlap', isOverlap(newDate) );