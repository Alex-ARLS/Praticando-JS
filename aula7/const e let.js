const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
const resultadoTriplicado = resultadoDuplicado * 3;
let resultadoQuadruplicado = resultadoTriplicado + 200;
resultadoQuadruplicado = resultadoQuadruplicado + 600; //a let quando alterada perde o valor do ultimo numero diferentementa da const q vc pode usar a qq momento.
console.log (resultadoQuadruplicado);
console.log(resultadoDuplicado + resultadoDuplicado);
console.log(resultadoDuplicado + resultadoDuplicado + resultado);
console.log (resultado * resultadoTriplicado);
console.log ( resultado / resultadoTriplicado)

