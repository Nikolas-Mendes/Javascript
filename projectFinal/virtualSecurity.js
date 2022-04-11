function CheckEntry() {
  GuestName = document.getElementById('name').value;
  GuestCristian = ['Amanda', 'Sabrina', 'Rafael', 'Jonas', 'Carol', 'Jhonatan'];
  if(GuestCristian.includes(GuestName)) {
    document.getElementById('PermissionOfEntry').innerText = 'You can Entry';
  } else {
    document.getElementById('PermissionOfEntry').innerText = 'You cant Entry';
  }
}