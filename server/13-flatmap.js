const users = [
    { userId: 1, username: 'Ander', attributes: [ 'Nice', 'Cute' ] },
    { userId: 2, username: 'Tom', attributes: [ 'Lovely' ] },
    { userId: 3, username: 'Mike', attributes: [ 'Nice', 'Cool' ] },
];

const resp1 = users.map( e => e.attributes ).flat();
const resp2 = users.flatMap( e => e.attributes );

console.log( { users, resp1, resp2 } );

const calendars = {
    primaryCalendar: [
        {
            startDate: new Date( 2021, 1, 1, 15 ),
            endDate: new Date( 2021, 1, 1, 15, 30 ),
            title: 'Cita 1'
        },
        {
            startDate: new Date( 2021, 1, 1, 17 ),
            endDate: new Date( 2021, 1, 1, 18 ),
            title: 'Cita 2'
        },
    ],
    seondaryCalendar: [
        {
            startDate: new Date( 2021, 1, 1, 12 ),
            endDate: new Date( 2021, 1, 1, 12, 30 ),
            title: 'Cita 3'
        },
        {
            startDate: new Date( 2021, 1, 1, 9 ),
            endDate: new Date( 2021, 1, 1, 10 ),
            title: 'Cita 4'
        },
    ]
}

// console.log( Object.values(calendars).map( calendar => calendar.map( e => e.startDate ) ).flat() );
// console.log( Object.values(calendars).flatMap( calendar => calendar.flatMap( e => e.startDate ) ) );

const resp3 = Object.values(calendars).flatMap( calendar => calendar.map( e => e.startDate ) );
console.log( { resp3 } );