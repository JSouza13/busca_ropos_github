const usuario = {
  nome: "Joao",
  idade: 25,
  endereco: {
    cidade: "Itapema",
    estado: "SC"
  }
};

const {
  nome,
  idade,
  endereco: { cidade }
} = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);
