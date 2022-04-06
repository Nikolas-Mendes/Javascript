const film = {
  title: 'Tick tick boom',
  year: 2021,
  actor: 'Andrew Garfield',
  type: 'Musical film',
}

showPropriets(film);

function showPropriets(obj) {
  for(prop in obj) 
    if(typeof obj[prop] === 'string')
      console.log(prop, obj[prop]);
}