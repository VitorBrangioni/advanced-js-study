/*
1) 
let numeros = [3, 2, 11, 20, 8, 7];
Sua tarefa: criar uma nova lista com a mesma quantidade de números, mas cada elemento da nova lista deve ter seu valor dobrado quando for ímpar. */

let numeros = [3, 2, 11, 20, 8, 7];

let novosNumeros = [];

novosNumeros.push(...numeros.map( (data) => (data % 2) ? data * 2: data));

// console.log(novosNumeros);


/* 
2) Refatore e use arrow funciotion no cod. abaixo

var aprovados = avaliacoes
    .filter(function(prova) { return prova.nota >= 7; })
    .map(function(prova) { return prova.aluno.nome;});

console.log(aprovados); */

var aprovados = avaliacoes
    .filter( prova => prova.nota >= 7 )
    .map( prova => prova.aluno.nome );

console.log(aprovados); 