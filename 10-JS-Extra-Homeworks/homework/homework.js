// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var arreglo = [] ;

  for (propiedades in objeto) {
    arreglo.push([propiedades,objeto[propiedades]]) ;
  }

  return arreglo ;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  var objeto = {} ;

  for (i=0; i<string.length; i++){
    objeto[string.charAt(i)] = [0 , 0] ;
  }

  for(i=0;i< string.length; i++){            
    for(j=0;j<string.length;j++){
        if(string.charAt(j)==string.charAt(i) && objeto[string.charAt(i)][1]==0){
          objeto[string.charAt(i)][0]= objeto[string.charAt(i)][0] + 1 ;
    }  
  }
  objeto[string.charAt(i)][1] = 1
}

var objetoAdevolver = {} ;

for (elemento in objeto){
  objetoAdevolver[elemento] = objeto[elemento][0] ;
  }

return objetoAdevolver ;  

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  var palabra = s ;
  var mayus = "" ;
  var minus = "" ;

  for (i = (s.length-1) ; i >= 0; i--){
    if(s.charAt(i) == s.charAt(i).toUpperCase()){
      mayus = s.charAt(i) + mayus;
    }
    else{
      minus = s.charAt(i) + minus ;
    }
  }
  return palabra = mayus + minus ;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var contador = 0 ;
  var indice = 0 ;
  var palabraAdevolver = "" ;

  for (i=0; i<str.length ; i++){
    if(str[i] == " "){
      contador = contador + 1 ;
    }
  }
  var arreglo = [] ;

  for (i=0 ; i<= contador; i++){
    arreglo.push([i,""]) ;
  }

  for (i=0; i< str.length ; i++){

    if(str.charAt(i) != " "){
      arreglo[indice][1] = str.charAt(i) + arreglo[indice][1] ;
    }

    else {
      indice = indice + 1;
    }
  }

  palabraAdevolver = arreglo[0][1] ;

  for (i=1; i<=indice; i++){
    palabraAdevolver = palabraAdevolver + " " + arreglo[i][1] ;
  }

  return palabraAdevolver ;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numString = "" + numero + "" ;
  var reves = "" ;

  for (i = (numString.length-1) ; i>=0 ; i--){
    reves = reves + numString[i] ;
  }
  
  var numReves = parseInt(reves) ;

  if (numero == numReves){
    return "Es capicua"
  }

  else {
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var devolver = "" ;

  for (i=0; i<cadena.length ; i++){
    if (cadena[i]!="a" && cadena[i]!="b" && cadena[i]!="c"){
      devolver = devolver + cadena[i] ;
    }
  }
  return devolver ;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  let a ;
  let arreglo = [...arr]
  // for(i=0; i<arr.length; i++){
  //     arreglo.push(arr[i])
  // }

  for (i=0; i<arreglo.length ; i++){
    for(j=i; j<arreglo.length; j++){
      if(arreglo[j].length < arreglo[i].length){
        a = arreglo[j] ;
        arreglo[j] = arreglo[i] ;
        arreglo[i] = a ;
      }
    }
  }
  return arreglo ;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  
  let arreglo = [] ;
  let objeto = {} ;
  let array1 = [] ;

  for (i=0 ; i<arreglo1.length ; i++){
    for(j=0; j<arreglo2.length; j++){
      if(arreglo1[i]==arreglo2[j]){
        arreglo.push(arreglo1[i]) ;
      }
    }
  }

  for (i=0 ; i<arreglo.length ; i++){
        objeto[arreglo[i]]= i ;
  }
    
  for (elemento in objeto){
    array1.push(elemento) ;
  }

  for (i=0; i<array1.length; i++){
    array1[i] = parseInt(array1[i])
  }
  

return array1 ;  
}  



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

