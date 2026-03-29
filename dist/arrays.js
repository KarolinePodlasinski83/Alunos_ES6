"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 7
}, {
  nome: 'Carlos',
  nota: 5
}, {
  nome: 'Beatriz',
  nota: 8
}, {
  nome: 'João',
  nota: 4
}, {
  nome: 'Mariana',
  nota: 6
}];
var resultado = alunos.map(function (aluno) {
  return {
    nome: aluno.nome,
    nota: aluno.nota,
    status: aluno.nota >= 6 ? 'Aprovado' : 'Reprovado'
  };
});
var aprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
var reprovados = alunos.filter(function (aluno) {
  return aluno.nota < 6;
});
console.log('Aprovados:', aprovados);
console.log('Reprovados:', reprovados);