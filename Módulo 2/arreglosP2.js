//Tema a arreglos Parte 2

var concatenaN1 = [ "Hola", "Buenas", "Tardes" ];
var concatenaN2 = [ "Adios", "Buenas", "Noches" ];
console.log( concatenaN2.concat( concatenaN1 ) );

//Método sort - sirve para ordenar
var frutasN1 = [ "Mandarina", "Piña",  "Sandía",  "Durazno" ];
var frutasN2 = [ "Mandarina", "Piña",  "Pera",  "Durazno" ];
var arregloNumeros = [ 5000, 10, 200,  1000, 400 ];
frutasN1.sort();
console.log( frutasN1 );
frutasN2.sort();
console.log( frutasN2 );
//arregloNumeros.sort();
//console.log( arregloNumeros);

//Ciclos - for
console. log( "Hola - Forma manual" );
console. log( "Hola - Forma manual" );
console. log( "Hola - Forma manual" );
for( var i = 10; i <= 2; i-- ){
	console.log( "Hola - Forma automática" + "i: " + i );
}
//[ 5000, 10, 200, 1000, 400 ]
console.log( arregloNumeros[4] );
for( var j = 0; j < arregloNumeros.length; j++ ){
    console.log( "El valor del arreglo en la posición: " +
    j + "es: " + arregloNumeros[j] );
}