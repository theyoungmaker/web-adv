LESSON 6 EXERCISE: TEST YOUR RULEBOOK
Time: about 15 minutes.
Use your own digital-library project from the Lesson 6 tutorial.

Your Book schema has rules. Break them on purpose and read what the File Clerk says.

1. Create the test file: copy starter/test-book.js into your digital-library folder,
   next to server.js. Run it with:
   node test-book.js

2. Break both rules: the starter calls Book.create({}) with no fields.
   Read the error. Which two fields does Mongoose say are missing?

3. Fix one rule at a time: add only a title and run again. Then add an author.
   When it works, find your book in Atlas Data Explorer, in the books collection.

4. CHALLENGE: add year: { type: Number } to models/Book.js, then try year: 'nineteen'
   What does the error say? How is it different from a missing field?

Sample solution: solutions/test-your-rulebook.md