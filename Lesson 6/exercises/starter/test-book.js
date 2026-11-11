// test-book.js
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Book from './models/Book.js';

dotenv.config();
await mongoose.connect(process.env.ATLAS_URI);

try {
  // TODO: add fields inside the { }
  const book = await Book.create({});
  console.log('Saved!', book);
} catch (error) {
  console.log(error.message);
}

await mongoose.disconnect();