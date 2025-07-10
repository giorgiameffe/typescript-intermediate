// ✏️ Esercizio 1 - Gestione stringa o numero (narrowing)
// Scrivi una funzione chiamata handleInput che riceve un parametro input di tipo string o number.
// Se input è una stringa, stampa in console la sua lunghezza.
// Se input è un numero, stampa in console il numero arrotondato a due cifre decimali.

function handleInput(input: string | number) {

    if (typeof input === 'string') {
        console.log(input.length);
    } else {
        console.log(input.toFixed(2));
    }
}

handleInput('Gelato');
handleInput(30.6789);


// ✏️ Esercizio 2 - Riconoscere tipi primitivi (narrowing)
// Scrivi una funzione chiamata checkType che riceve un parametro value di tipo boolean, string o number.
// Se value è un booleano, stampa "Valore booleano".
// Se value è una stringa, stampa "Valore stringa".
// Se value è un numero, stampa "Valore numero".




// ✏️ Esercizio 3 - Stringa singola o array di stringhe (narrowing)
// Scrivi una funzione chiamata printStringOrArray che riceve un parametro x di tipo string
// oppure array di stringhe (string[]).
// Se x è una stringa, stampa "Singola stringa: " seguito dal valore di x.
// Se x è un array di stringhe, stampa "Array di stringhe con lunghezza: " seguito dalla lunghezza dell’array.