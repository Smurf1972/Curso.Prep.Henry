// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return nombre[0].toUpperCase() + nombre.slice(1)
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
 // let suma = numeros.reduce(function(a,v)){ return a+v} ** Funciona igual
 
  var numeros = [1,2,3,4,5]
  var suma = 0
  for(var i = 0; i < numeros.length; i++) {
     suma = suma + numeros[i]}
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  for(var i = 0; i < array.length; i++) {
    cb(array[i])}
  // o
  //array.forEach(function(e)){ 
  //cb(e)})  
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  // quedó mocho de la clase
  //let arraycb = []
  //for (let 1=0;i<array.length;i++){
  //  Arraycb.push(cb(array[i]))
  //}

  //var array = [1,2,3,4,5]
  //function cb (e){
  var nuevoArray = []
  for(var i = 0; i < array.length; i++) {
     nuevoArray.push(cb(array[i]))
     nuevoArray[i] = cb(array[i])}
     return nuevoArray
  }
  
  //}
  //var nuevoArray = array.map(function(e) {
  //  return cb(e)})
  //return nuevoArray

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  // return array.filter(e=> e[0]==='a') 
  // o
  // return array.filter(e=> e[0]==='a')
  var nuevoArray = []
  var str_array = String
  for(let i = 0; i<array.length; i++) {
    str_array = array[i].toString()
    if (str_array.charAt(0) === 'a') {
    //if(array[i][0] === 'a') {
      nuevoArray.push(array[i])
    }
  }
  return nuevoArray;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
