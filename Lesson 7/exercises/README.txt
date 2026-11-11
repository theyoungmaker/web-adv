LESSON 7 EXERCISE: COUNT YOUR BOOKS
Time: about 10 minutes.
Use your own digital-library project from the Lesson 7 tutorial
(or a copy of tutorial/Digital_Library_L7_Solution with your own .env).

How many books are in your library? Add a new route that asks the File Clerk to count them.

1. Add the route: in server.js, below your READ route, add:
   app.get('/api/books/count', async (req, res) => { ... });

2. Ask the Clerk to count: inside the route, use await Book.countDocuments()
   Save the answer in total, then send it back with res.json({ count: total });

3. Test it: open http://localhost:3000/api/books/count in your browser.
   Add a book with Test POST, then refresh. Did the number go up?

4. CHALLENGE: count only the books by one author in your library.
   Where have you seen this filter before?
   Book.countDocuments({ author: 'E.B. White' })
   (Use an author that is already in your library. Check Test GET first!)

Sample solution: solutions/count-your-books.md
