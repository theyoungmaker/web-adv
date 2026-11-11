LESSON 4 EXERCISE: FILL YOUR FILING CABINET
Time: about 15 minutes. No code needed, everything happens in MongoDB Atlas.

Your cluster is an empty filing cabinet. Let's fill a drawer by hand!

1. In Atlas, open Data Explorer, connect to the cluster and click + Create Database.
   Database name: practice
   Collection name: movies

2. Click Insert Document and add 3 movies. One must be from before 2000!
   Example:
   { "title": "The Lion King", "year": 1994, "genre": "Animation" }

3. Type this in the Filter bar and click Find:
   { year: { $gt: 2000 } }
   Which movie disappeared? Why?

4. CHALLENGE: $gt means "greater than".
   Write a filter that shows only movies from before 2000.
   Then write one that shows only your Animation movies.

Sample solution: Lesson 4/exercises/solution/fill-your-filing-cabinet.md