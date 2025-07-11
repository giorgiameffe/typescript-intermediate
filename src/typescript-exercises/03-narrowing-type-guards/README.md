# 📘 Esercizi TypeScript – Narrowing & Type Guards

Questa raccolta di esercizi è pensata per approfondire le **verifiche di tipo dinamico** in TypeScript tramite il **narrowing** e le **type guard** (built-in e personalizzate). Imparerai a gestire tipi unione (`|`) in modo sicuro ed efficace.

---

## 🧠 Argomenti trattati

✅ Narrowing tramite `typeof`, `Array.isArray`, `=== null`

✅ Gestione di tipi unione (`string | number`, `number | null`, ecc.)  

✅ Funzioni type guard personalizzate (`value is Type`)

✅ Controlli su tipi primitivi, array, oggetti e proprietà

✅ Sicurezza dei tipi con `unknown`

---

## ▶️ Esecuzione (con TypeScript locale)

* Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```

npm init -y

```

* Installa **TypeScript** localmente come dipendenza di sviluppo:

```

npm install typescript --save-dev

````

* Aggiungi uno script nel `package.json` per eseguire gli esercizi:

```json
"scripts": {
  "build": "tsc",
  "3": "node dist/typescript-exercises/03-narrowing-type-guards/exercises.js"
}
````

* Crea il file **Typescript**:

```
src/typescript-exercises/03-narrowing-type-guards/exercises.ts
```

* * **Inizializza** il file di configurazione `tsconfig.json` TypeScript (se non presente):

```
npx tsc --init
```

* **Verifica** che il file compilato venga salvato nella cartella `dist/`
* Assicurati che nel `tsconfig.json` siano presenti queste opzioni (o simili):

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

* **Compila** il progetto:

```
npm run build
```

* **Esegui** lo script degli esercizi:

```
npm run 3
```

---

## 🎯 Obiettivo

* Gestire in modo sicuro i valori con tipi alternativi (`|`)
* Scrivere controlli di tipo robusti usando `typeof`, `in`
* Creare **type guard personalizzate** per oggetti complessi
* Rafforzare l’uso del tipo `unknown` in contesti reali
* Applicare il concetto di **type narrowing** nelle funzioni