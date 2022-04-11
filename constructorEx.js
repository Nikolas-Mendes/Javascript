function Post(title, message, author) {
  this.title = title,
  this.message = message,
  this.author = author,
  this.views = 0,
  this.comments = [],
  this.isItLive = false
}

let post = new Post('TOP', 'Very good', 'Nikolas mendes');
console.log(post);