# 📘 Esercizi TypeScript – Type Intersection (`&`)

Questa raccolta di esercizi è pensata per esercitarsi con i **tipi di intersezione (`&`)** in TypeScript, utili per combinare più strutture tipizzate in un’unica entità complessa e flessibile.

---

## 🧠 Argomenti trattati

✅ Creazione di tipi base (`type`)

✅ Tipi di intersezione (`&`)

✅ Composizione di oggetti complessi

✅ Funzioni che accettano oggetti composti

✅ Controlli condizionali basati su proprietà booleane

✅ Iterazione su array tipizzati

✅ Estrazione e filtraggio basato su proprietà

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
  "7": "node dist/typescript-exercises/07-type-intersection/exercises.js"
}
```

* Crea il file **TypeScript**:

```
src/typescript-exercises/07-type-intersection/exercises.ts
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
npm run 7
```

---

## 🎯 Obiettivo

* Creare oggetti combinando più **tipi personalizzati**
* Comprendere l’utilizzo del tipo di **intersezione (`&`)**
* Scrivere funzioni che elaborano **oggetti strutturati**
* Gestire **dati utente** con informazioni anagrafiche, di accesso e di ruolo
* Iterare su array di oggetti complessi e accedere a proprietà annidate
* Implementare funzioni di **filtro e selezione** basate su condizioni