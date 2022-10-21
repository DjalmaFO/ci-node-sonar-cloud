const printWelcomes = require('./print');

test("Print message 'Welcome João!'", () =>{
    expect(printWelcomes("Joãoo")).toBe("Welcome João!");
} )