// BOOKS BY AUTHOR
// Paste this in server.js, below the READ ONE route (GET /api/books/:id)
app.get('/api/books/author/:author', async (req, res) => {
    const books = await Book.find({ author: req.params.author });

    // Challenge: no books by this author
    if (books.length === 0) {
        return res.status(404).json({ message: "No books by this author!" });
    }

    res.json(books);
});
