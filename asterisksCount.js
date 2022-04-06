showAsterisks(5);

function showAsterisks(lines) {
  let pattern = '';
  for(let line = 1; line <= lines; line++) {
    pattern += '*';
    console.log(pattern);
  }
}