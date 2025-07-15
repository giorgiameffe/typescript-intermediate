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




// Esercizio 3 – Tipo generico personalizzato
// Definisci un'interfaccia Box<T> che abbia una proprietà value di tipo T.
// Crea due variabili: stringBox (con string) e numberBox (con number).



// Esercizio 4 – Coppia generica
// Crea un tipo Pair<T, U> che rappresenta una coppia di valori (first e second).
// Crea una funzione makePair che restituisce un oggetto di tipo Pair<T, U>.
// Usala con diverse combinazioni di tipi.



// Esercizio 5 – Funzione con vincolo generico (extends)
// Crea un’interfaccia HasLength con length: number.
// Scrivi una funzione logLength<T extends HasLength>(item: T) che stampa item.length.
// Usala con una stringa e con un array.



// Esercizio 6 – Generic con default
// Crea un’interfaccia ApiResponse<T = string> con status e data.
// Usa ApiResponse senza specificare il tipo (usa string di default).
// Usa ApiResponse<number> specificamente.