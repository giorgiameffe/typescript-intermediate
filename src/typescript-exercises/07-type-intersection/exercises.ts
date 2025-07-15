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

// ✏️ Esercizio 3 – Controllo permessi utente
// Crea due tipi:
// UserInfo con le proprietà: name e email
// Permissions con le proprietà: isAdmin canEdit
// Crea un tipo AdminUser che sia l’intersezione tra UserInfo e Permissions.
// Scrivi una funzione printPermissions che accetta un oggetto di tipo AdminUser e stampa:
// "Admin: sì" se isAdmin è true
// "Può modificare: sì" se canEdit è true
// e i dati dell’utente (name, email)
// Crea almeno due oggetti AdminUser diversi e chiamali nella funzione.

{
    type UserInfo = {
        name: string,
        email: string
    }

    type Permissions = {
        isAdmin: boolean,
        canEdit: boolean
    }

    type AdminUser = UserInfo & Permissions;

    function printPermissions(user: AdminUser) {

        console.log(`Nome: ${user.name}`);
        console.log(`Email: ${user.email}`);
        user.isAdmin === true ? console.log(`Admin: sì`) : console.log(`Non è un Admin`);
        user.canEdit === true ? console.log(`Può modificare: sì`) : console.log(`Non si può modificare`);
    }

    const userOne: AdminUser = {
        name: 'Pamela',
        email: 'pam@ciao.it',
        isAdmin: true,
        canEdit: true
    }

    const userTwo: AdminUser = {
        name: 'Luca',
        email: 'luca@ciao.it',
        isAdmin: false,
        canEdit: false
    }

    printPermissions(userOne);
    printPermissions(userTwo);
}