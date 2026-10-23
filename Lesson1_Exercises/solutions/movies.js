const movies = ['The Lion King', 'Frozen', 'Inside Out'];

console.log('Movies at the start:', movies);

function addMovie(title) {
  if (title === '') {
    console.log('❌ A movie needs a title!');
    return;
  }
  movies.push(title);
  console.log(`Added ${title}! We now have ${movies.length} movies.`);
}

addMovie('Spider-Man');
addMovie('');
