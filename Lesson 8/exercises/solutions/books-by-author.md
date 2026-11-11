## Step 4: Challenge

`Book.find()` never returns `null`. For an unknown author it returns an empty list `[]`, so the route checks `books.length === 0`:

```js
if (books.length === 0) {
  return res.status(404).json({ message: "No books by this author!" });
}
```

With this in place, an unknown author gets **404 Not Found**:

```json
{ "message": "No books by this author!" }
```

Without the challenge code, the same request gives `[]` with **200 OK**.