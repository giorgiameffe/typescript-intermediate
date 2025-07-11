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

// ✏️ Esercizio 3: Crea una classe Animale con ereditarietà
// Crea una classe Animale con proprietà: nome
// Aggiungi un metodo faVerso() che stampa: "L'animale fa un verso generico".
// Crea una sottoclasse Cane che estende Animale:
// Override del metodo faVerso() per stampare: "Bau!"



// ✏️ Esercizio 4 — Classe Libro con getter/setter
// Crea una classe Libro con una proprietà titolo.
// Includi un costruttore che inizializza il titolo.
// Aggiungi due metodi:
// getTitolo() che restituisce il titolo del libro.
// setTitolo(nuovoTitolo: string) che aggiorna il titolo.