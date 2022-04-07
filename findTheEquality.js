function Address(street,city,cep) {
  this.street = street,
  this.city = city,
  this.cep = cep
}

const address1 = new Address(
  'Sarandi',
  'Porto Alegre',
  91120020,
)

const address2 = new Address(
  'Moinhos de Vento',
  'Porto Alegre',
  90540-001,
)

function areTheSame(address1, address2) {
  return address1.street === address2.street &&
         address1.city === address2.city && 
         address1.cep === address2.cep
}

console.log(areTheSame(address1, address2));

function haveMemoryOfTheSameAddress(address1, address2) {
  return address1 === address2;
}

console.log(haveMemoryOfTheSameAddress(address1, address2));