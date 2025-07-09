// ✏️ Esercizio 1 – Proprietà opzionale
// Crea un’interfaccia chiamata User e aggiungi due proprietà: name (obbligatoria), age (opzionale)
// Crea due oggetti User, uno con age, uno senza.

interface User {
    name: string,
    age?: number
}

const userOne: User = {
    name: 'Valentina',
    age: 22
}

const userTwo: User = {
    name: 'Martyn'
}

console.log(userOne);
console.log(userTwo);

// ✏️ Esercizio 2 – Proprietà readonly
// Crea un’interfaccia chiamata Product e aggiungi due proprietà: id (readonly) e name
// Crea un oggetto Product.
// Prova a modificare id e verifica che TypeScript segnali un errore.

interface Product {
    readonly id: number,
    name: string
}

const product: Product = {
    id: 3,
    name: 'Stampante'
}

// product.id = 4; [commentato per errore Typescript => id di sola lettura, non può essere modificato]

// ✏️ Esercizio 3 – Estendere un’interfaccia (creare un’interfaccia che eredita da un’altra)
// Crea un’interfaccia Person con: name
// Crea un’interfaccia Employee che estende Person, aggiungendo: role
// Crea un oggetto Employee valido.

interface Person {
    name: string
}

interface Employee extends Person {
    role: string
}

const employee: Employee = {
    name: 'Danilo',
    role: 'Designer'
}

console.log(employee);

// ✏️ Esercizio 4 – Estensione + Opzionale + Readonly (combinare tutte le funzionalità viste)
// Crea un’interfaccia BaseUser con: id (readonly) e username
// Crea un’interfaccia PremiumUser che estende BaseUser e aggiunge: membership ["gold" | "silver" | "bronze" (opzionale)]
// Crea due oggetti PremiumUser: uno con membership e uno senza.

interface BaseUser {
    readonly id: number,
    username: string
}

interface PremiumUser extends BaseUser {
    membership?: 'gold' | 'silver' | 'bronze'
}

const userWithoutMembership: PremiumUser = {
    id: 1,
    username: 'sabry77'
}

const userWithMemberShip: PremiumUser = {
    id: 2,
    username: 'vale89',
    membership: 'gold'
}

console.log(userWithoutMembership);
console.log(userWithMemberShip);

// ✏️ Esercizio 5 – Interfaccia come tipo per funzione (usare un’interfaccia per definire i parametri di una funzione)
// Crea un’interfaccia Book con: title, author e publishedYear (opzionale)
// Scrivi una funzione printBookInfo che 
// stampa il titolo e l’autore 
// e se presente, stampa anche l’anno di pubblicazione
// Chiama la funzione con due oggetti: uno con l’anno e uno senza.

interface Book {
    title: string,
    author: string,
    publishedYear?: number
}

function printBook(book: Book): void {
    console.log(`Titolo: ${book.title}, Autore: ${book.author}`)

    if (book.publishedYear) {
        console.log(`Titolo: ${book.title}, Autore: ${book.author}, Anno di pubblicazione: ${book.publishedYear}`)
    }
}

printBook({ title: 'Orgoglio e Pregiudizio', author: 'Jane Austen' })
printBook({ title: 'Romeo e Giulietta', author: 'William Shakespeare', publishedYear: 1597 });



