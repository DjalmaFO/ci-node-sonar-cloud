const printWelcomes = require('./print');

test("Print message 'Welcome João!'", () =>{
    expect(printWelcomes("João")).toBe("Welcome João!");
} );