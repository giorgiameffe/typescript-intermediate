// ✏️ Esercizio 1 – Tipo PersonWithAddress
// Crea due tipi:
// Person con proprietà name: string
// Address con proprietà city: string
// Crea un tipo PersonWithAddress come intersezione tra Person e Address
// Crea un oggetto che rispetta questo tipo

{
    type Person = {
        name: string;
    }

    type Address = {
        city: string;
    }

    type PersonWithAddress = Person & Address;

    const personOne: PersonWithAddress = {
        name: 'Valentina',
        city: 'Genova'
    }

    console.log(personOne);
}

// ✏️ Esercizio 2 – Funzione che riceve un tipo intersezione
// Crea due tipi:
// LoginData con proprietà username e password
// Profile con proprietà name e age
// Crea un tipo UserAccount che sia l’intersezione tra LoginData e Profile.
// Crea una funzione printAccount che riceve un oggetto che è l’intersezione dei due
// La funzione deve stampare tutte le proprietà
// Crea un oggetto user che rispetta il tipo UserAccount e passalo alla funzione printAccount

{
    type LoginData = {
        username: string,
        password: string
    }

    type Profile = {
        name: string,
        age: number
    }

    type UserAccount = LoginData & Profile;

    function printAccount(user: UserAccount): void {

        console.log(`Username: ${user.username}`);
        console.log(`Password: ${user.password}`);
        console.log(`Nome: ${user.name}`);
        console.log(`Età: ${user.age}`);
    }

    const user: UserAccount = {
        username: 'Tony70',
        password: 'ciao',
        name: 'Antonio',
        age: 40
    }

    printAccount(user);
}