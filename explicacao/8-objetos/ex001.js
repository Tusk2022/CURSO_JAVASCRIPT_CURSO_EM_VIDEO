let amigo = {
  nome: "Rodrigo", 
  sexo: "M",
  peso: 64,
  engordar(p=0){
    console.log(`ENGORDOU!`)//Objeto pode criar function
    this.peso += p
  }
}

amigo.engordar(2)
console.log(`O seu amigo ${amigo.nome} tem ${amigo.peso}kg`)