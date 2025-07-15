// Esercizio 1 – Funzione Identità
// Crea una funzione identity che prende un parametro di tipo generico T e lo restituisce.
// Chiama la funzione con una stringa e con un numero.

function identity<T>(parameter: T): T {
    return parameter;
}

console.log(identity('Acqua'));
console.log(identity(45));

// Esercizio 2 – Array generico
// Scrivi una funzione getFirstElement<T> che accetta un array di tipo T[] e restituisce il primo elemento.
// Testala con array di stringhe e numeri.

function getFirstElement<T>(array: T[]): T {
    return array[0];
}

console.log(getFirstElement(['rosso', 'blu', 'giallo']));
console.log(getFirstElement([7, 28, 9, 29]));

// Esercizio 3 – Tipo generico personalizzato
// Definisci un'interfaccia Box<T> che abbia una proprietà value di tipo T.
// Crea due variabili: stringBox (con string) e numberBox (con number).

interface Box<T> {
    value: T;
}

const stringBox: Box<string> = {
    value: 'giardino'
}

console.log(stringBox.value);

const numberBox: Box<number> = {
    value: 13
}

console.log(numberBox.value);

// Esercizio 4 – Coppia generica
// Crea un tipo Pair<T, U> che rappresenta una coppia di valori (first e second).
// Crea una funzione chiamata makePair che accetta due parametri generici a: T e b: U
// e restituisce un oggetto { first: a, second: b } del tipo Pair<T, U>
// Usala con diverse combinazioni di tipi.

type Pair<T, U> = {
    first: T,
    second: U
}

function makePair<T, U>(a: T, b: U): Pair<T, U> {
    return { first: a, second: b };
}

console.log(makePair('nome', 24));
console.log(makePair(33, true));
console.log(makePair([1, 2, 3, 4], 'cognome'));
