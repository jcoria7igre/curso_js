//OBJETOS
let persona={
    nombre: 'Juan ',
    edad: 30,
    pais: 'España'
}
console.log(persona);
persona.edad = 31;
console.log(persona);

let caro = {
    modelo: 'Fiat',
    año: 2023
}
console.log(caro);
caro.color='azul';
console.log(caro)

let frutas = {
    nombre:'bananas',
    color : 'rojo',
    peso: 1.2
}
delete frutas.peso
console.log(frutas)

let cat ={
    edad: 5,
    nombre: 'patitas'
}
cat.edad = 56
console.log(cat)

let hexNumero1 = 0x21
console.log(hexNumero1)

0xAB = a * 16 **1 + B *16 **0

console.log(0xAB)

//ALCANCE DEL VARIABLE

let numero = 5
{
    let numero = 10
    numero = numero * 2
    console.log(numero)
}
console.log(numero)

"use strict"
let nombre = "Juana"
console.log(nombre)

"use strict"
function sumar (a, a, b){

    return a + a + b
}

console.log(sumar(1,2,3))

//METODO DE ARREGLOS
const arreglo = [1,2,3,4]
console.log(arreglo)

arreglo.push(5)

console.log(arreglo)
//elimina el ultimo
arreglo.pop()
console.log(arreglo)
//eliminar el primero
arreglo.shift()
console.log(arreglo)
//añadir al inicio
arreglo.unshift(10)
console.log(arreglo)

//SLICE
const arregloSlice = [1,2,3,4]
console.log(arregloSlice)

const subn = arregloSlice.slice(1,4)
console.log(subn)
console.log(arregloSlice)

//COPIAR UN ARREGLO
const COarregloSlice = [1,2,3,4,50,50]
const subnCOPIA = COarregloSlice.slice()
console.log(subnCOPIA)

//SPLICE = QUITAR ELEMENTOS


