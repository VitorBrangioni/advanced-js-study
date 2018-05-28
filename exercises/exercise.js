/*
1) 
let numeros = [3, 2, 11, 20, 8, 7];
Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar. */

let numeros = [3, 2, 11, 20, 8, 7];

let novosNumeros = [];

novosNumeros.push(...numeros.map( (data) => {
    if (data % 2 !== 0) {
        return data *2;
    }
    return data;
}));

console.log(novosNumeros);