# 📘 Esercizi TypeScript – Type Assertion

Questa raccolta di esercizi è pensata per imparare a utilizzare le **type assertion** in TypeScript, ovvero come “forzare” il tipo di una variabile per aiutare il compilatore a comprendere meglio il tipo reale in contesti dinamici o incerti.

---

## 🧠 Argomenti trattati

✅ Type assertion con la sintassi `as Tipo`

✅ Forzare tipi da `any` o `unknown` a tipi più specifici come `string` o `number`

✅ Type assertion su oggetti e proprietà

✅ Type assertion su elementi DOM (in ambiente browser)

✅ Gestione di tipi poco definiti in modo sicuro

---

## ▶️ Esecuzione (con TypeScript locale)

* Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```bash
npm init -y
```

* Installa **TypeScript** localmente come dipendenza di sviluppo:

```bash
npm install typescript --save-dev
```

* Aggiungi uno script nel `package.json` per eseguire gli esercizi:

```json
"scripts": {
  "build": "tsc",
  "typeassertion": "node dist/typescript-exercises/type-assertion/exercises.js"
}
```

* Crea il file **TypeScript** in cui inserire gli esercizi:

```
src/typescript-exercises/type-assertion/exercises.ts
```

* Inizializza il file di configurazione `tsconfig.json` (se non presente):

```bash
npx tsc --init
```

* Assicurati che il file compilato venga salvato nella cartella `dist/`
* Verifica che nel `tsconfig.json` siano presenti queste opzioni:

```json
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  }
}
```

* Compila il progetto:

```bash
npm run build
```

* Esegui lo script degli esercizi:

```bash
npm run typeassertion
```

---

## 🎯 Obiettivo

* Usare la sintassi `as` per dichiarare il tipo di una variabile
* Forzare variabili di tipo `any` o `unknown` a tipi specifici (`string`, `number`)
* Manipolare oggetti tipizzati tramite type assertion
* Gestire in modo sicuro **elementi DOM** usando type assertion (solo in ambiente browser)
* Applicare type assertion per lavorare con **proprietà di oggetti** poco tipizzati