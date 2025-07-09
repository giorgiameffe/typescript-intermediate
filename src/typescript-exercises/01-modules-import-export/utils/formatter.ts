// esporta come default una funzione formatDate che prende un oggetto Date 
// e restituisce una stringa in formato YYYY-MM-DD

export default function formatDate(date: Date): string {
    return date.toISOString().split("T")[0];
}