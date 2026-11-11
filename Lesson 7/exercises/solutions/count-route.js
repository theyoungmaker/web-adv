// COUNT: How many books are in the library?
// Paste this in server.js, below the READ route (GET /api/books)
app.get('/api/books/count', async (req, res) => {
    const total = await Book.countDocuments();
    res.json({ count: total });
});

// Challenge: count only the books by one author
// (swap in an author that is in your library)
// app.get('/api/books/count', async (req, res) => {
//     const total = await Book.countDocuments({ author: 'E.B. White' });
//     res.json({ count: total });
// });
