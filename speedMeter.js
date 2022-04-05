// Max Speed = 70
// every 5km over the limit you get 1 point
// Math.Floor()
// if points are greater than 12 suspended wallet

checkSpeed(130);

function checkSpeed(speed) {
  const speedMax = 70;
  const kmForPoint = 5;

  if (speed <= speedMax)
    console.log('ok');
  else {
    const points = Math.floor((speed - speedMax) / kmForPoint);
    if(points >= 12) 
      console.log('Suspended Wallet');
    else
      console.log('Points: ' + points);
  }
}