// Narrowing - Type GUards integrate

// ✏️ Esercizio 1 - Gestione stringa o numero
// Scrivi una funzione chiamata handleInput che riceve un parametro input di tipo string o number.
// Se input è una stringa, stampa in console la sua lunghezza.
// Se input è un numero, stampa in console il numero arrotondato a due cifre decimali.

function handleInput(input: string | number): void {

    if (typeof input === 'string') {
        console.log(input.length);
    } else {
        console.log(input.toFixed(2));
    }
}

handleInput('Gelato');
handleInput(30.6789);

// ✏️ Esercizio 2 - Riconoscere tipi primitivi
// Scrivi una funzione chiamata checkType che riceve un parametro value di tipo boolean, string o number.
// Se value è un booleano, stampa "Valore booleano".
// Se value è una stringa, stampa "Valore stringa".
// Se value è un numero, stampa "Valore numero".

function checkType(value: boolean | string | number): void {

    if (typeof value === 'boolean') {
        console.log('Valore booleano')
    } else if (typeof value === 'string') {
        console.log('Valore stringa')
    } else {
        console.log('Valore numero')
    }
}

checkType(true);
checkType('Gatto');
checkType(5);

// ✏️ Esercizio 3 - Stringa singola o array di stringhe
// Scrivi una funzione chiamata printStringOrArray che riceve un parametro x di tipo string
// oppure array di stringhe (string[]).
// Se x è una stringa, stampa "Singola stringa: " seguito dal valore di x.
// Se x è un array di stringhe, stampa "Array di stringhe con lunghezza: " seguito dalla lunghezza dell’array.

function printStringOrArray(x: string | string[]): void {

    if (typeof x === 'string') {
        console.log('Singola stringa:', x);
    } else {
        console.log('Array di stringhe con lunghezza:', x.length);
    }
}

printStringOrArray('Cane');
printStringOrArray(['Cocomero', 'Mango', 'Albicocca']);

// ✏️ Esercizio 4 - Valore nullo o numero 
// Scrivi una funzione chiamata displayValue che riceve un parametro input di tipo number | null.
// Se input è null, stampa "Nessun valore".
// Se è un numero, stampa "Valore: " seguito dal numero.

function displayValue(input: number | null): void {

    if (input === null) {
        console.log('Nessun valore');
    } else {
        console.log('Valore:', input)
    }
}

displayValue(null);
displayValue(8);

// ✏️ Esercizio 5 - Booleano o array di numeri 
// Scrivi una funzione chiamata processData che riceve un parametro data di tipo boolean | number[].
// Se data è un booleano, stampa "Attivo" se è true, o "Inattivo" se è false.
// Se è un array di numeri, stampa "Somma: " seguito dalla somma di tutti i numeri nell’array.

function processData(data: boolean | number[]) {

    if (typeof data === 'boolean') {
        data === true ? console.log('Attivo') : console.log('Inattivo');
    } else {

        let sum = 0;

        for (let i = 0; i < data.length; i++) {

            const currentData = data[i];
            sum += currentData;
        }

        console.log('Somma:', sum)
    }
}

processData(true);
processData(false);
processData([3, 5, 5]);

// Con reduce

{
    function processData(data: boolean | number[]) {
        if (typeof data === 'boolean') {
            console.log(data ? 'Attivo' : 'Inattivo');
        } else {
            const sum = data.reduce((acc, curr) => acc + curr, 0);
            console.log('Somma:', sum);
        }
    }

    processData(true);
    processData(false);
    processData([3, 5, 5]);

}

// Narrowing - Type GUards personalizzate

// ✏️ Esercizio 1 – isString
// Scrivi una funzione isString che prende un valore di tipo unknown e ritorna value is string.
// La funzione deve restituire true solo se il valore è una stringa.

function isString(value: unknown): value is string {

    return typeof value === 'string';
}

console.log(isString('Come stai?'));
console.log(isString(5));

// ✏️ Esercizio 2 – isNumberArray
// Scrivi una funzione isNumberArray che prende un valore di tipo unknown e ritorna value is number[].
// Deve restituire true solo se il valore è un array e tutti gli elementi sono numeri.

function isNumberArray(value: unknown): value is number[] {

    return Array.isArray(value) && value.every(item => typeof item === 'number');
}

console.log(isNumberArray([2, 9, 6]));
console.log(isNumberArray([2, 9, 'penna']));

// ✏️ Esercizio 3 – isPerson
// Definisci il tipo Person con una proprietà name stringa.
// Scrivi una funzione isPerson che prende un valore di tipo unknown e ritorna value is Person.
// La funzione deve verificare che il valore sia un oggetto non nullo con una proprietà name di tipo stringa.

{
    type Person = {
        name: string
    }

    function isPerson(value: unknown): value is Person {

        return typeof value === 'object'
            && value !== null
            && 'name' in value
            && typeof value.name === 'string';
    }

    console.log(isPerson({ name: 'Debora' }));
    console.log(isPerson({ name: 25 }));
}

// ✏️ Esercizio 4 – Type guard per Car
// Definisci un tipo Car con due proprietà: model di tipo string e year di tipo number
// Scrivi una funzione isCar che prende un valore di tipo unknown e ritorna value is Car.
// La funzione deve verificare che il valore sia un oggetto non nullo,
// che abbia le proprietà model (stringa) e year (numero).

type Car = {
    model: string,
    year: number
}

function isCar(value: unknown): value is Car {

    return typeof value === 'object'
        && value !== null
        && 'model' in value
        && typeof value.model === 'string'
        && 'year' in value
        && typeof value.year === 'number'
}

console.log(isCar({ model: 'Lancia-y', year: 2016 }));
console.log(isCar({ model: 'Panda' }));

// ✏️ Esercizio 5 – Funzione che riceve un valore generico e usa type guard
// Definisci un tipo Animal con proprietà: species e age
// Scrivi una funzione checkAnimal che prende un parametro value: unknown 
// e restituisce value is Animal verificando se value ha le proprietà giuste.
// Poi scrivi una funzione printAnimalInfo che prende un parametro data: unknown.
// Se data è un Animal (usando la type guard checkAnimal), stampa "Specie: ... Età: ...".
// Altrimenti stampa "Non è un animale valido".

type Animal = {
    species: string,
    age: number
}

function checkAnimal(value: unknown): value is Animal {

    return typeof value === 'object'
        && value !== null
        && 'species' in value
        && typeof value.species === 'string'
        && 'age' in value
        && typeof value.age === 'number'
}

function printAnimalInfo(data: unknown): void {

    if (checkAnimal(data)) {
        console.log(`Specie: ${data.species},Età: ${data.age}`)
    } else {
        console.log('Non è un animale valido')
    }
}

printAnimalInfo({ species: 'Gatto', age: 5 });
printAnimalInfo({ species: 'Cane', age: '3' });