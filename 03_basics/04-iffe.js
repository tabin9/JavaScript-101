// Immediately Invoked Function Expressions (IFFE) //

// regular function
function db() {
    console.log(`DB Connected`)
}
db();

// iffe function 
// this one's a NAMED IFFE -> db1
(function db1() {
    console.log(`DB Connected`);
})();       // semi colon is very important here

// syntax --> ()();     --> in first pair of braces we write the function definition and the second pair is for execution then a semicolon to end the iffe

// iffe as arrow fn
// NOT NAMED
((name) => {
    console.log(`DB Connected Two ${name}`);
})('Tabin');       // semi colon is very important here