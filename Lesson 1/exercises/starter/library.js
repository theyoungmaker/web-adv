import fs from 'fs';

// 1. READ the file as text, then turn it into an array
const text = fs.readFileSync('movies.json', 'utf-8');
const movies = JSON.parse(text);

// 2. PRINT how many movies, and each title
// TODO

// 3. ADD a new movie, e.g. { title: 'Spider-Man' }
// TODO

// 4. SAVE the array back into the file as text
// TODO: fs.writeFileSync('movies.json', ...)
