showType(10);

function showType(limit) {
  for(let i = 0; i <= limit; i++) {
    if(i % 2 !== 1)
      console.log(i, 'PAR');
    else 
      console.log(i, 'IMPAR');
  }
}