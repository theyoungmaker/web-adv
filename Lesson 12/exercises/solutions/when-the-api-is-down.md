# Lesson 12 Exercise: When the API Is Down (Sample Solution)

**Where:** `src/App.js` in the `movie-gallery` (React) project
**Time:** about 15 minutes

## Step 1: The error box

```jsx
const [movies, setMovies] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
```

`error` works like `loading`: a box that starts as `false`.

## Step 2: Catch the problem

```jsx
useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/movies`)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
}, []);
```

`.catch` runs when `fetch` can't reach the API. We show the error **and** stop loading.

## Step 3: Show the message

```jsx
{loading && <Typography>Loading movies...</Typography>}
{error && <Typography>Couldn't load movies 😢</Typography>}
```

The same `&&` trick as Step 4 of the tutorial: the message only shows when `error` is `true`.

**Test:** stop the Movie API with Ctrl + C in the `movie-gallery-api` terminal, then refresh the Gallery. After a moment the message appears. Start the API again with `npm run dev` and refresh: the movies come back.

## Step 4: Challenge

```jsx
import { Box, Typography, Button } from "@mui/material";
```

```jsx
{error && (
  <Typography>
    Couldn't load movies 😢
    <Button onClick={() => window.location.reload()}>
      Try again
    </Button>
  </Typography>
)}
```

`window.location.reload()` refreshes the page, so the fetch runs again. Keep the other names already in your `@mui/material` import line and just add `Button`.

## Common mistakes

| What happened | Why | Fix |
|---|---|---|
| "Loading movies..." and the error both show | `setLoading(false)` is missing from `.catch` | Set both inside `.catch` |
| The whole Gallery disappeared | Ctrl + C was pressed in the React window | Stop the `movie-gallery-api` window instead, and restart React with `npm start` |
| `Button is not defined` | `Button` isn't imported | Add it to the `@mui/material` import |
| The message never appears | The API is still running, or there are two `.catch` lines | Stop the API, and keep only one `.catch` |
