let idade = 70;
if(idade < 16){
  console.log(`Você tem ${idade} anos. NÃO VOTA!`)
} else{
    if(idade < 18 || idade > 65){
      console.log(`Você tem ${idade}. VOTO OPSIONAL!`)
    }else{
      console.log(`Você tem ${idade}. VOTO OBRIGATORIO!`)
    }
}