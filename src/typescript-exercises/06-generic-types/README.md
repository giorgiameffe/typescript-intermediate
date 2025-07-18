# 📘 Esercizi TypeScript – Tipi Generici, Funzioni e Interfacce

Questa raccolta di esercizi è pensata per approfondire l’uso dei **tipi generici (Generics)** in TypeScript, incluse funzioni, interfacce, tipi personalizzati e composizioni generiche.

---

## 🧠 Argomenti trattati

✅ Tipi generici di base (`<T>`, `<T, U>`)

✅ Funzioni generiche con parametri di tipo

✅ Interfacce generiche (`interface Box<T>`)

✅ Tipi personalizzati con generici (`type Pair<T, U>`, `type KeyValue<K, V>`)

✅ Composizione e inferenza di tipi generici

✅ Esempi con array, oggetti e unioni di tipo

---

## ▶️ Esecuzione (con TypeScript locale)

* Inizializza un nuovo progetto **Node.js** (se non l’hai già fatto):

```
npm init -y
```

* Installa **TypeScript** localmente come dipendenza di sviluppo:

```
npm install typescript --save-dev
```

* Aggiungi uno script nel `package.json` per eseguire gli esercizi:

```json
"scripts": {
  "build": "tsc",
  "6": "node dist/typescript-exercises/06-generic-types/exercises.js"
}
```

* Crea il file **TypeScript**:

```
src/typescript-exercises/06-generic-types/exercises.ts
```

* **Inizializza** il file di configurazione `tsconfig.json` TypeScript (se non presente):

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
npm run 6
```

---

## 🎯 Obiettivo

* Comprendere l’utilizzo dei **Generics** per creare funzioni e strutture dati riutilizzabili
* Applicare generici in contesti reali come array, oggetti e tipi complessi
* Scrivere **funzioni generiche** per evitare ripetizione di codice
* Usare le **interfacce generiche** per strutturare oggetti con valori flessibili
* Combinare più tipi generici in un’unica funzione o tipo (`<T, U>`, `<K, V>`)
* Esercitarsi con esempi pratici di **box, pair, key-value**, e array tipizzati