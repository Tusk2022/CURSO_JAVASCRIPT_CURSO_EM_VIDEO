let listaNum = []

function adicionar(){
  const n1 = Number(document.getElementById('inicio').value)

  if(n1 > 100 || n1 <= 0 || n1 == "" || listaNum.includes(n1)){//VERIFICAR ERROS
    alert(`[ERRO] Adicione um valor valido`)
  }else{
    listaNum.push(n1)//ADICIONAR OS NUMEROS NA LISTA
    console.log(listaNum)
    
  }
}

function resposta(){
  const msg = document.getElementById('p#msg')

  let menor = listaNum.sort((a, b) => a - b)
  let quantidade = listaNum.length
  let soma = listaNum.reduce((total, atual) => total + atual, 0)
  let media = soma / listaNum.length
  
  console.log(`Ao todo, temos ${quantidade} números cadastrados.`)
  console.log(`O menor valor é ${menor[0]}`)
  console.log(`A soma entre eles é ${soma}`)
  console.log(`A media dos valores é ${media.toFixed(1)}`)//toFixed formata o valor para aparecer so uma casa decimal

}