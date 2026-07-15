function contar() {
  const iniciotxt = document.getElementById('inicio').value
  const fimtxt = document.getElementById('fim').value
  const passotxt = document.getElementById('passo').value
  const msg = document.querySelector('p#msg')

  if(iniciotxt == "" || fimtxt == "" || passotxt == ""){
    alert("[ERRO] Preencha todos os campos.")
  }else{
    const inicio = Number(iniciotxt)
    const fim = Number(fimtxt)
    const passo = Number(passotxt)

    if(passo <= 0){
      alert("[ERRO] Considerando o PASSO em 1")
      passo = 1
    }

    msg.innerHTML = ''
    if(inicio <= fim){
      for(let c = inicio; c <= fim; c += passo){
        if(c == fim){
          msg.innerHTML += `${c}`
        }else{
          msg.innerHTML += `${c} 👉`
        }
      }
    }else{
      for(let c = inicio; c >= fim; c -= passo){
        if(c == fim){
          msg.innerHTML += `${c}`
        }else{
          msg.innerHTML += `${c} 👉`
        }
      }
    }
    msg.innerHTML += `🏁`
  }
}
