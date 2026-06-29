const agora = new Date()
const hora = agora.getHours()
const min = agora.getMinutes()

console.log(`Agora são ${hora}:${min}`)
if(hora < 12){
  console.log(`Bom dia!`)
} else if(hora < 17){
  console.log(`Boa tarde!`)
}else{
  console.log(`Boa noite!`)
}