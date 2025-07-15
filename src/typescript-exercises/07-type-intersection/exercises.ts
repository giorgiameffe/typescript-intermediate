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