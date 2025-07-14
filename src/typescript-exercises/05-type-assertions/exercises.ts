// ✏️ Esercizio 1 — Type assertion su any stringa
// Hai una variabile valore di tipo any che contiene una stringa.
// Usa una type assertion per trattarla come string, poi stampa la lunghezza della stringa (.length).

const value: any = 'Montagna';
const valueLength = (value as string).length;
console.log(valueLength);

// ✏️ Esercizio 2 — Type assertion su any numero
// Hai una variabile numero di tipo any che contiene un numero.
// Usa una type assertion per trattarla come number e stampane il valore.

const valueNumber: any = 17;
const number = valueNumber as number;
console.log(number);

// ✏️ Esercizio 3 — Type assertion su unknown stringa
// Hai una variabile qualcosa di tipo unknown che contiene una stringa.
// Usa una type assertion per trattarla come string e stampa la sua lunghezza.

const something: unknown = 'Giappone';
const stringLength = (something as string).length;
console.log(stringLength);

// ✏️ Esercizio 4 — Type assertion su elemento HTML
// Hai un elemento HTML creato con document.createElement("input").
// Usa una type assertion per trattarlo come HTMLInputElement e imposta il valore del campo input a "Mario".



// ✏️ Esercizio 5 — Type assertion su oggetto
// Hai un oggetto vuoto che stai "forzando" a essere del tipo { nome: string }.
// Usa la type assertion per dichiarare il tipo, poi assegna un valore al campo nome e stampalo.