import mongoose from 'mongoose';

// 1. Write the Rulebook
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number } // Challenge: added in the exercise
});

// 2. Create the Builder
const Book = mongoose.model('Book', bookSchema);

// 3. Export the File Clerk!
export default Book;