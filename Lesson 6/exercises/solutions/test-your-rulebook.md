# Lesson 6 Exercise: Test Your Rulebook (Sample Solution)

**Where:** the `digital-library` project, in a new file `test-book.js` next to `server.js`
**Time:** about 15 minutes
**Run with:** `node test-book.js` (the server doesn't need to be running)

## Starter code (`lesson-06/starter/test-book.js`)

```js
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
```

## Step 2: Break both rules

```
Book validation failed: title: Path `title` is required., author: Path `author` is required.
```

Both `required` rules broke, so nothing was saved.

## Step 3: Fix one rule at a time

Title only, `Book.create({ title: 'Matilda' })`:

```
Book validation failed: author: Path `author` is required.
```

Both fields:

```js
const book = await Book.create({
  title: 'Matilda',
  author: 'Roald Dahl'
});
```

```
Saved! { title: 'Matilda', author: 'Roald Dahl', _id: ..., __v: 0 }
```

The book is now in the `books` collection in Atlas. Mongoose turns the model name `Book` into the collection name `books`.

## Step 4: Challenge

In `models/Book.js`:

```js
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number }
});
```

`Book.create({ title: 'Matilda', author: 'Roald Dahl', year: 'nineteen' })`:

```
Book validation failed: year: Cast to Number failed for value "nineteen" (type string) at path "year"
```

**Missing field** breaks the `required` rule. **Wrong type** gives a `Cast` error.

## Common mistakes

| What happened | Why | Fix |
|---|---|---|
| `Cannot find module './models/Book.js'` | `test-book.js` isn't in the project root | Move it next to `server.js` |
| `uri parameter ... got "undefined"` | `dotenv.config()` is missing or `.env` is in the wrong folder | Keep `.env` in the project root |
| The script never ends | `mongoose.disconnect()` is missing | Add it as the last line |

Students can delete their test books in Data Explorer afterwards.