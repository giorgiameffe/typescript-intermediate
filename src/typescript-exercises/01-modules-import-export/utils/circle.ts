// Esporta area come default export e PI come named export

export const PI = 3.14;

export default function area(radius: number): number {
    return PI * radius * radius;
}