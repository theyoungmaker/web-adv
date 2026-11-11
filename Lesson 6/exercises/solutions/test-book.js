// test-book.js (sample solution)
// Run with: node test-book.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Book from './models/Book.js';

dotenv.config();
await mongoose.connect(process.env.ATLAS_URI);

try {
  // Step 2: Book.create({}) → title and author are both required
  // Step 3: title only → author is required
  // Step 3: both fields → saved!
  const book = await Book.create({
    title: 'Matilda',
    author: 'Roald Dahl'
  });
  console.log('Saved!', book);

  // Step 4 (challenge): needs year: { type: Number } in models/Book.js
  // Uncomment to see the Cast error:
  // await Book.create({ title: 'Matilda', author: 'Roald Dahl', year: 'nineteen' });
} catch (error) {
  console.log(error.message);
}

await mongoose.disconnect();