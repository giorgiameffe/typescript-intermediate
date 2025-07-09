// ✏️ Esercizio 1 – Proprietà opzionale
// Crea un’interfaccia chiamata User e aggiungi due proprietà:
// name (obbligatoria, di tipo string)
// age (opzionale, di tipo number)
// Crea due oggetti User, uno con age, uno senza.



// ✏️ Esercizio 2 – Proprietà readonly
// Crea un’interfaccia chiamata Product e aggiungi due proprietà:
// id (di tipo number, readonly)
// name (di tipo string)
// Crea un oggetto Product valido.
// Prova a modificare id e verifica che TypeScript segnali un errore.



// ✏️ Esercizio 3 – Estendere un’interfaccia (creare un’interfaccia che eredita da un’altra)
// Crea un’interfaccia Person con:
// name: string
// Crea un’interfaccia Employee che estende Person, aggiungendo:
// role: string
// Crea un oggetto Employee valido.



// ✏️ Esercizio 4 – Estensione + Opzionale + Readonly (combinare tutte le funzionalità viste)
// Crea un’interfaccia BaseUser con:
// id: number (readonly)
// username: string
// Crea un’interfaccia PremiumUser che estende BaseUser e aggiunge:
// membership: "gold" | "silver" | "bronze" (opzionale)
// Crea due oggetti PremiumUser: uno con membership e uno senza.




// ✏️ Esercizio 5 – Interfaccia come tipo per funzione (usare un’interfaccia per definire i parametri di una funzione)
// Crea un’interfaccia Book con:
// title: string
// author: string
// publishedYear: number (opzionale)
// Scrivi una funzione printBookInfo che stampa il titolo e l’autore
// se presente, stampa anche l’anno di pubblicazione
// Chiama la funzione con due oggetti: uno con l’anno e uno senza.



