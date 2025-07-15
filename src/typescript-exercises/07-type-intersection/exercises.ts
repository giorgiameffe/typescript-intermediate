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

// ✏️ Esercizio 4 – Tipo con più livelli e array di utenti
// Crea tre tipi:
// BasicInfo con proprietà id e name
// Contact con proprietà email e phone
// Role con proprietà isAdmin e canEdit
// Crea un tipo FullUser come intersezione tra BasicInfo, Contact e Role.
// Crea un array di FullUser con almeno 3 utenti.
// Scrivi una funzione printUserDetails che prende un array di FullUser e stampa per ogni utente:
// id, name, email, telefono, se è admin e se può modificare.

type BasicInfo = {
    id: number,
    name: string
}

type Contact = {
    email: string,
    phone: string
}

type Role = {
    isAdmin: boolean,
    canEdit: boolean
}

type FullUser = BasicInfo & Contact & Role;

const arrayOne: FullUser[] = [
    {
        id: 1,
        name: 'Giorgia',
        email: 'giorgia@ciao.com',
        phone: '36475954090',
        isAdmin: true,
        canEdit: true
    },
    {
        id: 2,
        name: 'Michela',
        email: 'michy@ciao.com',
        phone: '36475954090',
        isAdmin: false,
        canEdit: false
    },
    {
        id: 3,
        name: 'Francesco',
        email: 'franc@ciao.com',
        phone: '36475954090',
        isAdmin: true,
        canEdit: true
    }
]

function printUserDetails(array: FullUser[]): void {

    array.forEach((element) => {
        console.log(`Id: ${element.id}, Nome: ${element.name}, Email: ${element.email}, Telefono: ${element.phone}, E'Admin? ${element.isAdmin}, Può modificare: ${element.canEdit} `)
    })
}

printUserDetails(arrayOne);

// ✏️ Esercizio 5 – Filtro utenti admin da array
// Usa il tipo FullUser dell’esercizio precedente.
// Scrivi una funzione getAdmins che prende un array di FullUser e restituisce solo gli utenti con isAdmin === true.
// Usa getAdmins per filtrare gli admin e stampare solo il nome e l'email.