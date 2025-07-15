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

// ✏️ Esercizio 5 – Oggetto con chiave e valore generici
// Crea un tipo generico KeyValue<K, V> che rappresenta un oggetto con:
// una proprietà key di tipo K
// una proprietà value di tipo V
// Crea una funzione chiamata createKeyValue che accetta due parametri generici k: K e v: V
// e restituisce un oggetto { key: k, value: v } del tipo KeyValue<K, V>
// Testa la funzione con: una stringa e un numero, un numero e un booleano, una stringa e un array

type KeyValue<K, V> = {
    key: K,
    value: V
}

function createKeyValue<K, V>(k: K, v: V): KeyValue<K, V> {
    return { key: k, value: v };
}

console.log(createKeyValue('estate', 25));
console.log(createKeyValue(18, false));
console.log(createKeyValue('Ciao, come stai?', [3, 8, 6]));