# Lesson 13 Exercise: Rules and Top Movies (Sample Solution)

**Where:** the `movie-gallery-api` project from the Lesson 13 tutorial
**Time:** about 15 minutes

## Step 1: Your own rule (`models/Movie.js`)

```js
title: {
  type: String,
  required: true,
  trim: true,
  maxlength: [50, 'Title must be 50 characters or less']
},
```

`maxlength` is the text version of `max`. A title longer than 50 characters now gets **400 Bad Request** with our message, and the Admin Panel shows it. `trim` runs first, so spaces at the ends don't count.

## Steps 2 and 3: The top route (`routes/movies.js`)

Put it **above** `router.get('/:id', ...)`:

```js
router.get('/top', async (req, res) => {
  const movies = await Movie.find({ score: { $gte: 4 } });
  res.json(movies);
});
```

- `$gte` means **greater than or equal to**, so scores of 4 and 5 come back. It's the same idea as `$gt` from Lesson 4.
- Inside the router the path is just `'/top'`, because `server.js` already adds `/api/movies`.
- It's a GET route, so it needs no Admin Key and can be tested in the browser: `http://localhost:3001/api/movies/top`

## Step 4: Challenge

```js
const movies = await Movie.find({ score: { $gte: 4 } }).sort({ score: -1 });
```

`-1` sorts from highest to lowest. `1` would put the lowest first.

## Common mistakes

| What happened | Why | Fix |
|---|---|---|
| `Cast to ObjectId failed for value "top"` | `/top` is below `/:id`, so Express reads `top` as an id | Move the `/top` route above `/:id` |
| Long titles still save | Typed `maxLength` with a capital L | Use `maxlength`, all lowercase |
| `Cannot GET /api/movies/top` | Wrote `'/api/movies/top'` inside the router | Use `'/top'` |
| 401 instead of the title message | The Admin Key box is empty | Type your Admin Key in the Admin Panel |
| `[]` comes back | No movies have a score of 4 or more | Check the scores in the Admin Panel |
