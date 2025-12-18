const numeros: number[] = [40, 1, 5, 200, 3];

function ordenar(numeros:number[]):number[]{
    numeros.sort((a, b) => a - b);
    return numeros;
}

console.log(ordenar(numeros))