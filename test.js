// Import the function sum from the app.js file
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');


test('el resultado de 1 euro es 1,07 dolar', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = fromEuroToDollar(1);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(1.07);
});

test('el resultado de 1,07 dolar es 156.5 yen', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = fromDollarToYen(1.07);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(156.5);
});

test('el resultado de 156.5 yen es 0.87 pound', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = fromYenToPound(156.5);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(0.87);
});
