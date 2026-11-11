LESSON 8 EXERCISE: BOOKS BY AUTHOR
Time: about 10 minutes.
Use your own digital-library project from the Lesson 8 tutorial
(or a copy of tutorial/Digital_Library_L8_Solution with your own .env).

Find every book by one author. Use the same req.params trick as /:id, with a new filter.

1. Add the route: in server.js, below your READ ONE route, add:
   app.get('/api/books/author/:author', async (req, res) => { ... });

2. Find the books: inside the route, write:
   const books = await Book.find({ author: req.params.author });
   Then send them back with res.json(books);

3. Test in Postman: GET http://localhost:3000/api/books/author/E.B. White
   (You added Charlotte's Web by E.B. White in Step 3 of the tutorial.)
   Now try an author who isn't in your library. What comes back?

4. CHALLENGE: if none are found, send 404: { message: "No books by this author!" }
   Hint: an empty list has books.length === 0

Sample solution: solutions/books-by-author.md
