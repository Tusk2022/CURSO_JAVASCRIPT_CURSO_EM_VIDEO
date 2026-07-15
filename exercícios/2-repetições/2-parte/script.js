function contar(){
  const numtxt = document.getElementById('tabuada').value
  const msg = document.querySelector('p#msg')

  if(numtxt == ""){
    alert(`[ERRO] preencha o campo`)
  }else{
    msg.innerHTML = ''
    
    const num = Number(numtxt)
    for(let c = 1; c <= 10; c ++){
      msg.innerHTML += `${num} X ${c} = ${c * num} <br>`
    }
  }
}