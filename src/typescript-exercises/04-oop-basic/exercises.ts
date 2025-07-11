// Classi base

// ✏️ Esercizio 1: Crea una classe Person
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

// ✏️ Esercizio 2: Aggiungi un metodo per aggiornare l'età
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

// ✏️ Esercizio 3: Crea una classe Car
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

// ✏️ Esercizio 4: Crea una classe Animal con ereditarietà
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

// ✏️ Esercizio 5: Ereditarietà con strumenti musicali
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

// ✏️ Esercizio 1: public
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

// ✏️ Esercizio 2: private
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