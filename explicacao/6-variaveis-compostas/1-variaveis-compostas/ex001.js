let n = [4, 7, 5, 1] // 0, 1, 2, 3, 

console.log(`${"===".repeat(15)}`)

console.log(`O conteudo da variavel é: ${n}`)
console.log(`${"===".repeat(15)}`)

console.log(`O conteudo da variavel indice 1 é: ${n[1]}`)
console.log(`${"===".repeat(15)}`)

console.log(`O vetor tem ${n.length} posições`)
console.log(`${"===".repeat(15)}`)

console.log(`Em ordem crescente: ${n.sort()}`)
console.log(`${"===".repeat(15)}`)

n.push(3)
console.log(`Adicionando o numero 3 no final: ${n}`)
console.log(`${"===".repeat(15)}`)

for(let pos = 0; pos < n.length; pos++){
  console.log(`A posição ${pos} é ${n[pos]}`)
}
console.log(`${"===".repeat(15)}`)

for(let pos in n){
  console.log(`A posição ${pos} é ${n[pos]}`) 
}
