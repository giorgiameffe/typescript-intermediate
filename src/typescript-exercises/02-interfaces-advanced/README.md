# 📘 Esercizi TypeScript – Interfacce (Interfaces)

Questa raccolta di esercizi è pensata per esplorare a fondo le **interfacce** (`interface`) in TypeScript, imparando a descrivere oggetti complessi, estendere tipi, definire proprietà opzionali e di sola lettura, e usarle come parametri di funzione.

---

## 🧠 Argomenti trattati

✅ Definizione di **interfacce** (`interface`)  

✅ **Proprietà opzionali** (`?`)  

✅ **Proprietà readonly**  

✅ **Estensione di interfacce** (`extends`)  

✅ Combinazioni avanzate: estensione + opzionali + readonly 

✅ Uso delle interfacce come **tipi per parametri di funzione**

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
  "2": "node dist/typescript-exercises/03-interfaces/exercises.js"
}
````

* Crea il file **TypeScript**:

```
src/typescript-exercises/03-interfaces/exercises.ts
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

* **Compila** gli esercizi:

```
npm run build
```

* **Esegui** lo script:

```
npm run 2
```
---

## 🎯 Obiettivo

* Modellare oggetti in TypeScript con precisione e chiarezza
* Creare strutture riutilizzabili tramite estensione delle interfacce
* Lavorare con proprietà **opzionali** e **immutabili**
* Tipizzare correttamente i **parametri di funzione** con oggetti strutturati
* Capire come TypeScript garantisce la sicurezza e la coerenza dei dati