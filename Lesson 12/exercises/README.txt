LESSON 12 EXERCISE: WHEN THE API IS DOWN
Time: about 15 minutes.
Use your own movie-gallery (React) project from the Lesson 12 tutorial.
Both servers must be running: movie-gallery-api (npm run dev) and movie-gallery (npm start).

What if the Movie API is down? Show a friendly message instead of a blank page.

1. Add an error box: in App.js, next to your other useState lines, add:
   const [error, setError] = useState(false);

2. Catch the problem: in your useEffect, change the .catch line to:
   .catch(() => { setError(true); setLoading(false); });

3. Show the message: under your loading line, add:
   {error && <Typography>Couldn't load movies 😢</Typography>}
   Test it: stop the Movie API (Ctrl + C in the movie-gallery-api terminal),
   then refresh the Gallery. Start it again with npm run dev and refresh.

4. CHALLENGE: add a Try again button inside the error message.
   Remember to import Button from @mui/material!
   <Button onClick={() => window.location.reload()}>Try again</Button>

Sample solution: solutions/when-the-api-is-down.md
