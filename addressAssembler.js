// define object
let address = {
  street: 'Sarandi',
  city: 'Porto Alegre',
  cep: 91120020,
}

function showAddress(address) {
  for(let key in address)
    console.log(key, address[key]);
}

showAddress(address);