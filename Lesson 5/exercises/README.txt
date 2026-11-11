LESSON 5 EXERCISE: BREAK IT ON PURPOSE
Time: about 15 minutes.
Use your own digital-library project from the Lesson 5 tutorial
(or a copy of tutorial/Digital_Library_L5_Solution with your own .env).

Errors are clues! Break your digital-library on purpose.
To restart: press Ctrl + C, then run npm run dev
(The server does NOT restart by itself when you change .env.)

Before you start, write down your real password so you can put it back.

1. Break the password: in .env, change one letter of your password. Save and restart.
   Read the error in the terminal. Then fix the password and restart again.

2. Break the database name: change /digital-library to /digital-libary. Restart.
   Do you get an error? Why or why not? Change it back when you're done.

3. Move PORT into .env: add the line PORT=3000 to .env.
   Then change line 9 of server.js to:
   const PORT = process.env.PORT || 3000;

4. CHALLENGE: in .env only, rename ATLAS_URI to ATLAS_URL. Restart.
   What does the error say? Which file has the mistake, .env or server.js?

Sample solution: solutions/break-it-on-purpose.md