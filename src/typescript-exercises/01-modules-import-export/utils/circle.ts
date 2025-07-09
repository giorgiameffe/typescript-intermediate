// Esporta PI come named export e area come default export

export const PI = 3.14;

export default function area(radius: number): number {
    return PI * radius * radius;
}