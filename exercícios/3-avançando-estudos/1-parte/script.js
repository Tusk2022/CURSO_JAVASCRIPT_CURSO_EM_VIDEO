let listaNum = []

function adicionar(){
  const n1 = Number(document.getElementById('inicio').value)
  let tab = document.getElementById('tabela')
  let item = document.createElement('option')

  if(n1 > 100 || n1 <= 0 || n1 == "" || listaNum.includes(n1)){//VERIFICAR ERROS
    alert(`[ERRO] Adicione um valor valido`)
  }else{
    listaNum.push(n1)//ADICIONAR OS NUMEROS NA LISTA
    item.innerHTML = `O valor ${n1} adicionado.`
    
    console.log(listaNum)
    tab.appendChild(item)
  }
}

function finalizar(){
  if (listaNum.length == 0){
    alert(`[ERRO] Adicione valores`)
  }else{
    const msg = document.getElementById('msg')

    let menor = listaNum.sort((a, b) => a - b)
    let quantidade = listaNum.length
    let soma = listaNum.reduce((total, atual) => total + atual, 0)
    let media = soma / quantidade
    
    msg.innerHTML = ``

    //HTML
    msg.innerHTML += `Ao todo, temos ${quantidade} números cadastrados. <br>`
    msg.innerHTML += `O menor valor é ${menor[0]} <br>`
    msg.innerHTML += `A soma entre eles é ${soma}<br>`
    msg.innerHTML += `A media dos valores é ${media.toFixed(1)}<br>`

    //CONSOLE JS
    console.log(`Ao todo, temos ${quantidade} números cadastrados.`)
    console.log(`O menor valor é ${menor[0]}`)
    console.log(`A soma entre eles é ${soma}`)
    console.log(`A media dos valores é ${media.toFixed(1)}`)//toFixed formata o valor para aparecer so uma casa decimal
  }
}
