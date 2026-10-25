import fs from 'fs';

const text = fs.readFileSync('movies.json', 'utf-8');
const movies = JSON.parse(text);

console.log(`We have ${movies.length} movies:`);
movies.forEach((movie) => console.log('-', movie.title));

const newMovie = { title: 'Spider-Man', year: 2002 };

// ⭐ Challenge: only add the movie if no movie already has that title
const alreadyThere = movies.some((movie) => movie.title === newMovie.title);

if (alreadyThere) {
  console.log(`${newMovie.title} is already in the list!`);
} else {
  movies.push(newMovie);
  fs.writeFileSync('movies.json', JSON.stringify(movies, null, 2));
  console.log('Saved!');
}
