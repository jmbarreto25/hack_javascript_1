/**
 * [1,2,3,4,5]
 * ["foo","bar","baz","qux","echo"]
 * 
 * 1) incluir los 2 array en 1 solo array
 * 2) los items del number array 1,3,5 se reescriben one,three,five
 * del string array todos sus items mutan de acuerdo a lo siguiente:
 * foo => f00
 * bar => Bar
 * baz => b@z   
 * qux => quX
 * echo => 3ch0
 * 3) anexar al inicio, al final y entre la unión de los array el string "h@ck"
 * 
 * 
 * output => ["h@ck","one",2,"three",4,"five","h@ck","f00","Bar","b@z","quX","3ch0","h@ck"]   
 */

let numberArray = [1, 2, 3, 4, 5];
let stringArray = ["foo", "bar", "baz", "qux", "echo"];
let result = [];

// Unir los dos arrays en uno solo
let combinedArray = numberArray.concat(stringArray);

// Modificar los elementos del array numérico y del array de strings
for (let i = 0; i < combinedArray.length; i++) {
  if (typeof combinedArray[i] === 'number') {
    // Modificar números específicos
    if (combinedArray[i] === 1) combinedArray[i] = 'one';
    if (combinedArray[i] === 3) combinedArray[i] = 'three';
    if (combinedArray[i] === 5) combinedArray[i] = 'five';
  } else if (typeof combinedArray[i] === 'string') {
    // Modificar strings específicos
    switch (combinedArray[i]) {
      case 'foo':
        combinedArray[i] = 'f00';
        break;
      case 'bar':
        combinedArray[i] = 'Bar';
        break;
      case 'baz':
        combinedArray[i] = 'b@z';
        break;
      case 'qux':
        combinedArray[i] = 'quX';
        break;
      case 'echo':
        combinedArray[i] = '3ch0';
        break;
    }
  }
}

//Anexar el string "h@ck" al inicio, al final y entre la unión de los arrays
result.push("h@ck");
for (let i = 0; i < combinedArray.length; i++) {
  result.push(combinedArray[i]);
  if (i === numberArray.length - 1) {
    result.push("h@ck");
  }
}
result.push("h@ck");

console.log(result);


//export result
module.exports = result;