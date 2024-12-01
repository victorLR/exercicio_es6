const alunos = [
    { aluno: "Victor", nota: 7 },
    { aluna: "Larissa", nota: 10 },
    { aluno: "Carlos", nota: 2 },
    { aluna: "Mariana", nota: 4 },
    { aluna: "Fernanda", nota: 6 },
  ];
  
  
  function alunosAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
  }
  
  
  const aprovados = alunosAprovados(alunos);
  console.log("Alunos aprovados:", aprovados);
  