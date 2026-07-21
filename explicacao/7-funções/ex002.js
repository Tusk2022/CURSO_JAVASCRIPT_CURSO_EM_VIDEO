function fatorial(n1=0){
  let fat = 1
  for(let c = n1; c > 1; c--){
      fat *= c
  }
  return fat
}
console.log(fatorial(5))