//Boolean
let muted: boolean = true;

muted = false;

// Numeros

let numerador:number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

// String
let nombre: string = 'Richard'
let saludo = `Me llamo ${nombre}`;

// Arreglos

let people: string[] = [];
people = ["Robert", "Isabel", "Robert"];
people.push("Rosa")

let peopleAndNumbers: Array < string | number > = [];
peopleAndNumbers.push(9000);
peopleAndNumbers.push("andres")

// Enum
enum Color {

    Rojo = 'Rojo',

    Verde = 'Verde',

    Azul = 'Azul',
}

let colorFav: Color = Color.Azul;
console.log(`Mi color fav es ${colorFav}`)

// Any

let comodin: any = 'Joker';
comodin = { type: 'Wildcard' };

// Object

let someObject: object = { type: 'Wildcard' };

 /* Funcion Básica */
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4, 6);


/* Funcion que llama a otra función */
function CreateAdder(a: number): (number) => number {
    return function (b: number) {
        return a + b;
    }
}

const addFour = CreateAdder(4);
const fourPlus6 = addFour(6);



/* Funcion con parámetros opcionales */
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const luis = fullName('Luis');


/* Funcion con parámetros inicializados */
function fullNameInitLastname(firstName: string, lastName: string = "Apellido"): string {
    return `${firstName} ${lastName}`;
}

const luis2 = fullNameInitLastname('Luis');

//Interfaces
enum Color {
    Morado = "Morado",
    Violeta = "Violeta"
}

interface Rectangulo {
    ancho: number
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
}

function area(r: Rectangulo) {
    return r.alto * r.ancho
}

const areaRes = area(rect)

rect.toString = function () {
    return this.color ? `Un rectángulo ${this.color}` : `Un rectangulo`
}

console.log(rect.toString())