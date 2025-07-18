# 📘 Esercizi TypeScript – Classi, Modificatori di Accesso e instanceof

Questa raccolta di esercizi è pensata per approfondire l’utilizzo delle classi in TypeScript, i modificatori di accesso (`public`, `private`,` protected`) e l’operatore **instanceof** per il controllo dinamico dei tipi e il narrowing.

---

## 🧠 Argomenti trattati

✅ Classi (`class`, `constructor`, `this`)

✅ Ereditarietà (`extends`, `super`, override di metodi)

✅ Metodi getter e setter

✅ Incapsulamento con `public`, `private`, `protected`

✅ Override e metodi personalizzati nelle sottoclassi

✅ Controllo tipi con **instanceof**

✅ **Narrowing** dei tipi usando instanceof

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
  "4": "node dist/typescript-exercises/04-oop/exercises.js"
}
```

* Crea il file **TypeScript**:

```
src/typescript-exercises/04-oop/exercises.ts
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
npm run 4
```

---

## 🎯 Obiettivo

* Definire e istanziare **classi TypeScript**
* Gestire correttamente proprietà e metodi
* Applicare **ereditarietà, super e overriding**
* Usare **getter/setter** per incapsulare l’accesso ai dati
* Comprendere e applicare i modificatori di accesso (`public`, `private`, `protected`)
* Utilizzare **instanceof** per verificare il tipo di un oggetto a runtime
* Implementare **narrowing** dei tipi in funzioni con parametri unione usando instanceof