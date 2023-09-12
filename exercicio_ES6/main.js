const alunos = [
  {
    nome: "pedro",
    nota: 7
  },
  {
    nome: "Luisa",
    nota: 6
  },
  {
    nome: "Alex",
    nota: 5
  },
  {
    nome: "Gabriel",
    nota: 4
  },
  {
    nome: "Yasmin",
    nota: 10
  },
  {
    nome: "Vinicius",
    nota: 3
  }
]

const alunosAprovados = (alunos) =>{
  return alunos.filter(function(item){
    return item.nota >= 6
  })
}

console.log(alunosAprovados(alunos))
