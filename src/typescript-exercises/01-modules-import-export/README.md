# 📘 Esercizi TypeScript – Import & Export di Moduli

Questa cartella contiene una serie di esercizi pratici per imparare a utilizzare correttamente **moduli**, **importazioni** ed **esportazioni** in TypeScript.  
Ogni esercizio mostra una forma comune di `export`/`import`, sia con **named** che **default export**, e anche l'utilizzo di **alias**.

---

## 🧠 Argomenti trattati

✅ **Named Export / Import**  

✅ **Default Export / Import**  

✅ Combinazione di **Default + Named Export**

✅ Uso di **alias** per importazioni  

✅ Organizzazione del codice in moduli riutilizzabili 

✅ Gestione di path relativi nei progetti TypeScript

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

* Aggiungi gli **script** nel package.json:

```json
"scripts": {
  "build": "tsc",
  "1": "node dist/typescript-exercises/01-modules-import-export/exercises.js"
}
````

* Crea il file **TypeScript**:

```
src/typescript-exercises/01-modules-import-export/exercises.ts
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
    "strict": true,
    "module": "commonjs"
  }
}
```

* **Compila** il progetto:

```
npm run build
```

* **Esegui** gli esercizi con lo script personalizzato:

```
npm run 1
```

---

## 🎯 Obiettivo

* Usare correttamente le **diverse forme di export/import** in TypeScript
* Organizzare codice modulare e riutilizzabile
* Capire la differenza tra `default` e `named` export
* Lavorare con **alias** per evitare conflitti o migliorare la leggibilità del codice
* Scrivere progetti scalabili strutturando i file per responsabilità