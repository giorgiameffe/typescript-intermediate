// Classi base

// ✏️ Esercizio 1 - Crea una classe Person
// Crea una classe Persona e aggiungi le proprietà: name e age
// Crea un metodo sayHi() che stampa: "Ciao, mi chiamo {name} e ho {age} anni".

{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHi(): void {
            console.log(`Ciao, mi chiamo ${this.name} e ho ${this.age} anni`)
        }
    }

    const personOne = new Person('Mario', 22);
    personOne.sayHi();

}

// ✏️ Esercizio 2 - Aggiungi un metodo per aggiornare l'età
// Aggiungi alla classe Persona un metodo:
// grow(anni: number) che aumenta l'età della persona.

{
    class Person {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }

        sayHi(): void {
            console.log(`Ciao, mi chiamo ${this.name} e ho ${this.age} anni`)
        }

        grow(ages: number): void {
            this.age += ages
        }
    }

    const personOne = new Person('Mario', 22);
    personOne.sayHi();
    personOne.grow(3);
    personOne.sayHi();
}

// ✏️ Esercizio 3 - Crea una classe Car
// La classe si chiama Car e deve avere due proprietà:
// brand (marca dell’auto, es. "Fiat")
// year (anno di immatricolazione, es. 2020)
// Aggiungi un metodo info() che stampa: "Questa auto è una {brand} del {year}"

{
    class Car {
        brand: string;
        year: number;

        constructor(brand: string, year: number) {
            this.brand = brand;
            this.year = year
        }

        info(): void {
            console.log(`Questa auto è una ${this.brand} del ${this.year}`);
        }
    }

    const carOne = new Car('Mercedes', 2020);
    carOne.info();
}

// ✏️ Esercizio 4 - Crea una classe Animal con ereditarietà
// Crea una classe Animal con proprietà: name
// Aggiungi un metodo sound() che stampa: "L'animale fa un verso generico".
// Crea una sottoclasse Dog che estende Animal:
// Override del metodo sound() per stampare: "Bau!"

{
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sound(): void {
            console.log("L'animale fa un verso generico")
        }
    }

    class Dog extends Animal {
        sound(): void {
            console.log('Bau');
        }
    }

    const animal = new Animal('Felix');
    animal.sound();
    const dog = new Dog('Lilli');
    dog.sound();
}

// ✏️ Esercizio 5 - Ereditarietà con strumenti musicali
// Crea una classe Instrument con una proprietà: name
// Nel costruttore inizializza name.
// Aggiungi un metodo play() che stampa: "Lo strumento suona una melodia generica."
// Crea una sottoclasse Piano che estende Instrument.
// Override il metodo play() nella classe Piano per stampare: "Il piano suona note dolci e armoniose."
// Crea un’istanza di Instrument e una di Piano e chiama il metodo play() su entrambe.

class Instrument {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    play(): void {
        console.log('Lo strumento suona una melodia generica');
    }
}

class Piano extends Instrument {
    play(): void {
        console.log('Il piano suona note dolci e armoniose');
    }
}

const instrument = new Instrument('Chitarra');
instrument.play();
const piano = new Piano('Piano');
piano.play();

// ✏️ Esercizio 6 — Classe Book con getter/setter
// Crea una classe Book con una proprietà title.
// Includi un costruttore che inizializza il titolo.
// Aggiungi due metodi:
// getTitle() che restituisce il titolo del libro.
// setTitle(newTitle: string) che aggiorna il titolo.

{
    class Book {
        title: string;

        constructor(title: string) {
            this.title = title;
        }

        getTitle(): string {
            return this.title
        }

        setTitle(newTitle: string): void {
            this.title = newTitle;
        }

    }

    const book = new Book('Twilight');
    console.log(book.getTitle());
    book.setTitle('Twilight 2');
    console.log(book.getTitle());
}

// Modificatori di Accesso (public, private, protected)

// ✏️ Esercizio 1 - public
// Crea una classe Book con una proprietà title dichiarata public.
// Crea un metodo showTitle() che stampa il titolo.
// Istanzia la classe, modifica il titolo dall’esterno e stampa il titolo prima e dopo la modifica.

{
    class Book {
        public title: string;

        constructor(title: string) {
            this.title = title;
        }

        showTitle(): void {
            console.log(`Titolo del libro: ${this.title}`)
        }
    }

    const book = new Book('Piccole donne');
    book.showTitle();

    book.title = 'Piccole donne crescono';
    book.showTitle();
}

// ✏️ Esercizio 2 - private
// Crea una classe Account con una proprietà private password.
// Crea un metodo checkPassword(input: string): boolean che ritorna true se la password corrisponde, false altrimenti.
// Prova a leggere la password dall’esterno (dovrebbe dare errore).

class Account {
    private password: string;

    constructor(password: string) {
        this.password = password;
    }

    checkPassword(input: string): boolean {

        return input === this.password;
    }
}

const accountPassword = new Account('ciao');
console.log(accountPassword.checkPassword('ciao'));

// console.log(account.password); // Errore: proprietà 'password' è privata e non accessibile dall’esterno

// ✏️ Esercizio 3 - protected
// Crea una classe Person con una proprietà protected ssn (codice fiscale).
// Crea una sottoclasse Employee che estende Person.
// Nella sottoclasse, crea un metodo showSSN() che stampa il codice fiscale.
// Istanzia Employee e chiama il metodo showSSN().
// Prova a leggere ssn dall’esterno (dovrebbe dare errore).

{
    class Person {
        protected ssn: string;

        constructor(ssn: string) {
            this.ssn = ssn;
        }
    }

    class Employee extends Person {

        showSsn(): void {
            console.log(`Il codice fiscale è: ${this.ssn}`);
        }
    }

    const employee = new Employee('GHVNEVE5687498NG');
    employee.showSsn();

    // console.log(employee.ssn); // Errore: proprietà 'ssn' è protected e non accessibile dall’esterno
}

// ✏️ Esercizio 4 - Modificatori combinati
// Crea una classe User con:

// una proprietà username pubblica
// una proprietà email privata
// una proprietà role protetta

// Aggiungi un metodo getEmail() che restituisce l’email
// Crea una sottoclasse Admin che estende User
// Crea un metodo describeRole() che stampa il ruolo dell’utente
// Crea un oggetto Admin, prova ad accedere a tutte le proprietà da fuori e verifica i risultati

{
    class User {
        public username: string;
        private email: string;
        protected role: string;

        constructor(username: string, email: string, role: string) {
            this.username = username;
            this.email = email;
            this.role = role;
        }

        getEmail(): string {
            return this.email;
        }
    }

    class Admin extends User {

        describeRole(): void {
            console.log(this.role)
        }
    }

    const userAdmin: Admin = new Admin('Giorgia', 'giorgia@ciao.it', 'Sviluppatore');
    console.log(userAdmin.username);
    console.log(userAdmin.getEmail());
    userAdmin.describeRole();
}

// Super

// ✏️ Esercizio 1 — Estensione con costruttore
// Crea una classe Product con le proprietà name e price.
// Estendi la classe con una sottoclasse Book, aggiungendo la proprietà author.
// Usa super per richiamare il costruttore del genitore.
// Aggiungi un metodo info() in entrambe le classi.

{
    class Product {
        name: string;
        price: number;

        constructor(name: string, price: number) {
            this.name = name;
            this.price = price;
        }

        info(): void {
            console.log(`Il ${this.name} costa ${this.price}€`);
        }
    }

    class Book extends Product {
        author: string;

        constructor(name: string, price: number, author: string) {
            super(name, price);
            this.author = author;
        }

        override info(): void {
            console.log(`Il libro ${this.name} di "${this.author}" costa ${this.price}€`);
        }
    }

    const product = new Product('televisore', 500);
    product.info();

    const book = new Book('Il vecchio e il mare', 12, 'Ernest Hemingway');
    book.info()
}

// ✏️ Esercizio 2 — Metodo con super
// Crea una classe Animal con un metodo speak().
// Crea una sottoclasse Cat che estende Animal, e sovrascrive il metodo speak()
// utilizzando super.speak() prima di stampare "Miao!".

{
    class Animal {
        speak(): void {
            console.log("L'animale fa un verso generico");
        }
    }

    class Cat extends Animal {
        override speak(): void {
            super.speak()
            console.log('Miao!')
        }
    }

    const animal = new Animal();
    animal.speak();

    const cat = new Cat();
    cat.speak();
}


// ✏️ Esercizio 3 — Esercizio 3 — Proprietà Protetta e Uso di super
// Crea una classe Vehicle con:
// Una proprietà protetta wheels (numero di ruote).
// Un costruttore che imposta wheels.
// Un metodo describe() che stampa quante ruote ha.
// Crea una sottoclasse Bicycle che:
// Chiama il costruttore della superclasse con super(2).
// Ha un metodo describe() che chiama super.describe() e aggiunge una descrizione extra.

class Vehicle {
    protected wheels: number;

    constructor(wheels: number) {
        this.wheels = wheels;
    }

    describe(): void {
        console.log(`Il veicolo ha ${this.wheels} ruote`)
    }
}

class Bicycle extends Vehicle {
    constructor() {
        super(2);
    }

    override describe(): void {
        super.describe();
        console.log('La bicicletta è una mountain bike.')
    }
}

const bicycle = new Bicycle();
bicycle.describe();

// ✏️ Esercizio 4 — Ereditarietà multilivello con super
// Crea tre classi: Person, Employee, Manager.
// Person ha name e un metodo describe().
// Employee estende Person e aggiunge jobTitle, sovrascrivendo describe() usando super.describe().
// Manager estende Employee e aggiunge department, sovrascrivendo describe() usando super.describe().

{
    class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        describe(): void {
            console.log(`Il nome della persona è ${this.name}.`)
        }
    }

    class Employee extends Person {
        jobTitle: string;

        constructor(name: string, jobTitle: string) {
            super(name);
            this.jobTitle = jobTitle;
        }

        override describe(): void {
            super.describe();
            console.log(`Il suo lavoro è ${this.jobTitle}.`)
        }
    }

    class Manager extends Employee {
        department: string;

        constructor(name: string, jobTitle: string, department: string) {
            super(name, jobTitle);
            this.department = department;
        }

        override describe(): void {
            super.describe();
            console.log(`Il dipartimento è ${this.department}.`)
        }
    }

    const person = new Person('Laura');
    person.describe();

    const employee = new Employee('Riccardo', 'Sviluppatore');
    employee.describe();

    const manager = new Manager('Bianca', 'Manager', 'Marketing');
    manager.describe();
}

// ✏️ Esercizio 5 — Ereditarietà multilivello con super e modificatori di accesso (Animali)
// Crea una classe base Animal con:
// una proprietà protetta name (string),
// un metodo pubblico describe() che stampa un messaggio.

// Crea una sottoclasse Bird che estende Animal, aggiungendo:
// una proprietà privata canFly (boolean),
// un metodo pubblico describe() che sovrascrive il metodo base, chiamando super.describe() e stampa un messaggio.

// Crea una sottoclasse Parrot che estende Bird, aggiungendo:
// una proprietà pubblica vocabularySize (number),
// un metodo pubblico describe() che sovrascrive il metodo base, chiamando super.describe() e poi stampa un messaggio.

{
    class Animal {
        protected name: string;

        constructor(name: string) {
            this.name = name;
        }

        describe(): void {
            console.log(`Questo animale è un ${this.name}`);
        }
    }

    class Bird extends Animal {
        private canFly: boolean;

        constructor(name: string, canFly: boolean) {
            super(name);
            this.canFly = canFly;
        }

        override describe(): void {
            super.describe();
            console.log(`Può volare? ${this.canFly}`);
        }
    }

    class Parrot extends Bird {
        public vocabularySize: number;

        constructor(name: string, canFly: boolean, vocabularySize: number) {
            super(name, canFly);
            this.vocabularySize = vocabularySize;
        }

        override describe(): void {
            super.describe();
            console.log(`Conosce ${this.vocabularySize} parole.`)
        }
    }

    const animal = new Animal('gatto');
    animal.describe();

    const bird = new Bird('uccello', true);
    bird.describe();

    const parrot = new Parrot('pappagallo', true, 20);
    parrot.describe();
}

// instanceof

// ✏️ Esercizio 1 – Verifica di classe semplice
// Crea una classe Dog con una proprietà name.
// Crea una funzione isDog che prende un oggetto e restituisce true se è un'istanza di Dog, altrimenti false.
// Testa la funzione con due oggetti: uno Dog, uno normale.

class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

function isDog(obj: any): boolean {

    return obj instanceof Dog;
}

const dogOne = new Dog('Luna');
console.log(isDog(dogOne));

const dogTwo = { name: 'Lilli' };
console.log(isDog(dogTwo));

// ✏️ Esercizio 2 – Ereditarietà e instanceof
// Crea una classe base Animal e una classe derivata Cat.
// Crea un oggetto kitty di tipo Cat.
// Verifica con instanceof se kitty è un Cat e anche un Animal.

{
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Cat extends Animal {
        constructor(name: string) {
            super(name);
        }
    }

    function isAnimal(obj: any): boolean {

        return obj instanceof Animal;
    }

    function isCat(obj: any): boolean {

        return obj instanceof Cat;
    }

    const kitty = new Cat('Kitty');
    console.log(`Kitty è un gatto? ${isCat(kitty)}`);
    console.log(`Kitty è un animale? ${isAnimal(kitty)}`)
}


// ✏️ Esercizio 3 – Tipo personalizzato con narrowing
// Crea due classi: Admin e User, entrambe con una proprietà name.
// Scrivi una funzione printUserInfo che riceve user: Admin | User.
// Se è un Admin, stampa "Admin: <name>", altrimenti "User: <name>", usando instanceof.
