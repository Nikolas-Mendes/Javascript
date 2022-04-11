let priceRange = [
  { toolTip: 'from R$50 to R$200', min: 50, max: 200 },
  { toolTip: 'from R$80 to R$300', min: 80, max: 300 },
  { toolTip: 'from R$40 to R$350', min: 40, max: 350 },
];

// Other option (using factory funtion)
function createPriceRange(toolTip, min, max) {
  return {
    toolTip,
    min,
    max
  }
}

let priceRange2 = [
  createPriceRange('from R$90 to R$490', 90, 490),
  createPriceRange('from R$400 to R$1500', 400, 1500),
  createPriceRange('from R$200 to R$900', 200, 900),
]

// Other option (using constructor function) 
function PriceRange(toolTip, min, max) {
  this.toolTip = toolTip,
  this.min = min,
  this.max = max
}

let priceRange3 = [
  new PriceRange('from R$400 to R$1400', 400, 1400),
  new PriceRange('from R$900 to R$1500', 900, 1500),
  new PriceRange('from R$500 to R$1000', 500, 1000),
]

console.log(priceRange);
console.log(priceRange2);
console.log(priceRange3);