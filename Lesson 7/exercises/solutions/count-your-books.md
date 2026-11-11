# Lesson 7 Exercise: Count Your Books (Sample Solution)

**Where:** the `digital-library` project from the Lesson 7 tutorial
**Time:** about 10 minutes

## Steps 1 and 2: The count route

In `server.js`, below the READ route:

```js
app.get('/api/books/count', async (req, res) => {
    const total = await Book.countDocuments();
    res.json({ count: total });
});
```

- `Book.countDocuments()` asks the File Clerk for the number only. It doesn't bring every book back.
- It needs `await`, because counting happens in the cloud, just like `Book.find()`.

## Step 3: Test it

Open `http://localhost:3000/api/books/count` in the browser:

```json
{ "count": 2 }
```

Any number is fine. Add a book with Test POST and refresh: the number goes up by 1. Restart the server and it stays the same, because the books are saved in the database.

## Step 4: Challenge

```js
const total = await Book.countDocuments({ author: 'E.B. White' });
```

```json
{ "count": 1 }
```

Use any author that is already in your library. `{ author: 'E.B. White' }` has the same filter shape as the Lesson 4 Data Explorer filters. The name must match exactly, including capitals and dots: `'EB White'` gives `0`.

## Common mistakes

| What happened | Why | Fix |
|---|---|---|
| Browser shows `{ "count": {} }` | `await` is missing | `const total = await Book.countDocuments();` |
| `Cannot GET /api/books/count` | Typo in the path, or the server wasn't restarted | Check the spelling, then save so `npm run dev` restarts |
| `ReferenceError: Book is not defined` | The Book import is missing | `import Book from './models/Book.js';` at the top |
| Challenge gives `0` | The author isn't in your library, or the name doesn't match exactly | Copy the name exactly as it appears in Test GET |

## Looking ahead

Lesson 8 adds `GET /api/books/:id`. Keep the count route **above** it, or Express treats the word `count` as a book id.