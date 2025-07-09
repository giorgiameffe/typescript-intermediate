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

// ✏️ Esercizio 3 - Named + Default Export insieme
// Importa area come default e PI come named da circle.ts
// - calcola area
// - stampa PI

import { PI } from './utils/circle';
import area from './utils/circle';

console.log(PI);
console.log(area(7));

