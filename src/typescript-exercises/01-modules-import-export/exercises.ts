// ✏️ Esercizio 1 – Named Export e Import
// Importa le funzioni add e multiply da math.ts e usale per stampare:
// 3 + 10 = 13
// 4 * 5 = 20

import { add, multiply } from './utils/math';

console.log(add(3, 13));
console.log(multiply(4, 5));

// ✏️ Esercizio 2 - Default Export e Import
// Importa la funzione greet da greet.ts (usando default import) e stampala con un nome. 

import greet from './utils/greet';

console.log(greet('Giorgia'));
