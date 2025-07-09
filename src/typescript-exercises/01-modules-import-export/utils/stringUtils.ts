// Esporta la funzione capitalize che mette la prima lettera maiuscola

export function capitalize(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}