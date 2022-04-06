// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [100,70,80];

console.log(studentAverage(array));

function studentAverage(grades) {
  const average = arithmeticAverage(grades);

  if(average < 59) return 'F';
  if(average < 69) return 'D';
  if(average < 79) return 'C';
  if(average < 89) return 'B';
  if(average <= 100) return 'A';
  else {
    return 'Error';
  }
}

function arithmeticAverage(array) {
  let sum = 0;
  for(let value of array) {
    sum += value;
  }
  return sum/(array.length);
}