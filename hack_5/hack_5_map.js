/**
 * mediante el loop map agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */

let numeros = [0,1,2,3]
let result = numeros.map((_,i) => 7 - i * 2);

console.log(result);

//export result
module.exports = result;