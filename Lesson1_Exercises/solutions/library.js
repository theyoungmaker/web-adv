import fs from 'fs';

const text = fs.readFileSync('movies.json', 'utf-8');
const movies = JSON.parse(text);

console.log(`We have ${movies.length} movies:`);
movies.forEach((movie) => console.log('-', movie.title));

movies.push({ title: 'Spider-Man', year: 2002 });

fs.writeFileSync('movies.json', JSON.stringify(movies, null, 2));
console.log('Saved!');
