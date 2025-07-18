# 📘 TypeScript Intermediate

Questa repository contiene una raccolta di esercizi per consolidare e approfondire la conoscenza di TypeScript.
Ogni cartella affronta un **concetto intermedio** della sintassi e del sistema di tipi, con esercizi pratici da eseguire localmente tramite Node.js e TypeScript.

> ✅ Ideale per chi ha già una base in TypeScript e vuole **approfondire concetti avanzati attraverso la pratica**.

---

## 📂 Struttura degli esercizi

| Cartella                   | Argomento principale       | Descrizione                                                                      |
| -------------------------- | -------------------------- | -------------------------------------------------------------------------------- |
| `01-modules-import-export` | Moduli ES e Import/Export  | Struttura di progetto modulare, `import`, `export`, visibilità tra file          |
| `02-interfaces-advanced`   | Interfacce avanzate        | Estensione, proprietà opzionali, readonly           |
| `03-narrowing-type-guards` | Type Guards & Narrowing    | Refinamento dei tipi con `typeof`, `in`, `instanceof`       |
| `04-oop`                   | Programmazione a Oggetti   | Classi, costruttori, ereditarietà, modificatori di accesso (`public`, `private`) |
| `05-type-assertions`       | Type Assertions            | Type assertion con la sintassi `as Tipo`assertion                     |
| `06-generic-types`         | Tipi Generici              | Tipi generici di base (`<T>`, `<T, U>`),  personalizzati con generici (`type Pair<T, U>`, `type KeyValue<K, V>`)                        |
| `07-type-intersection`     | Tipi di Intersezione (`&`) | Unione di più tipi in oggetti complessi e composizione di strutture              |

---

## ▶️ Come eseguire gli esercizi

> Assicurati di avere **Node.js** e **TypeScript** installati nel tuo sistema.

1. Clona la repository:

```bash
git clone https://github.com/giorgiameffe/typescript-intermediate.git
cd typescript-intermediate
```

2. Inizializza il progetto:

```bash
npm install
```

3. Compila il progetto TypeScript:

```bash
npm run build
```

4. Esegui gli esercizi di una lezione (es. lezione 1):

```bash
npm run 1
```

Ogni script corrisponde a una cartella numerata da `1` a `7`.

---

## ⚙️ Configurazione TypeScript

Assicurati che il file `tsconfig.json` contenga almeno:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

---

## 🎯 Obiettivi del progetto

✅ Approfondire concetti avanzati del sistema di tipi di TypeScript

✅ Imparare a scrivere codice modulare e riutilizzabile

✅ Usare classi, interfacce e generics per strutturare applicazioni reali

✅ Applicare le best practice di tipizzazione forte in contesti reali

✅ Gestire casi complessi con narrowing, guardie di tipo e tipi composti

---

## 📌 Note

* Ogni esercizio è indipendente e contenuto nel percorso `src/typescript-exercises/NOME-CARTELLA/`.
* Gli script per l’esecuzione si trovano nel `package.json`.
* Gli output compilati vengono salvati nella cartella `dist/`.