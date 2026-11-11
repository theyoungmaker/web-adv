LESSON 13 EXERCISE: RULES AND TOP MOVIES
Time: about 15 minutes.
Use your own movie-gallery-api project from the Lesson 13 tutorial.

Add a rule of your own, then a new route that finds the best movies.

1. Your own rule: in models/Movie.js, give title a limit with a friendly message:
   maxlength: [50, 'Title must be 50 characters or less']
   Test it: add a movie with a very long title in the Admin Panel
   (remember to type your Admin Key!).

2. Add the route: in routes/movies.js, ABOVE the '/:id' route, add:
   router.get('/top', async (req, res) => { ... });

3. Find the best movies: inside the route, write:
   const movies = await Movie.find({ score: { $gte: 4 } });
   Send them back, then open http://localhost:3001/api/movies/top

4. CHALLENGE: show the best movie first. Add this after find(...):
   .sort({ score: -1 })

Sample solution: solutions/rules-and-top-movies.md
