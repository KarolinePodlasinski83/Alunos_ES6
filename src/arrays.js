const alunos = [
  { nome: 'Ana', nota: 7 },
  { nome: 'Carlos', nota: 5 },
  { nome: 'Beatriz', nota: 8 },
  { nome: 'João', nota: 4 },
  { nome: 'Mariana', nota: 6 }
];

const resultado = alunos.map(aluno => {
    return {
        nome: aluno.nome,
        nota: aluno.nota,
        status: aluno.nota >= 6 ? 'Aprovado' : 'Reprovado'
    };
});

const aprovados = alunos.filter(aluno => aluno.nota >= 6);
const reprovados = alunos.filter(aluno => aluno.nota < 6);

console.log('Aprovados:', aprovados);
console.log('Reprovados:', reprovados);