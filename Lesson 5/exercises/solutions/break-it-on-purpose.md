# Lesson 5 Exercise: Break It on Purpose (Sample Solution)

**Where:** the `digital-library` project from the Lesson 5 tutorial
**Time:** about 15 minutes
**Needs:** a working connection that prints `Successfully connected to MongoDB Atlas!`

> **Restart after every `.env` change:** press `Ctrl + C`, then run `npm run dev` again.
> `node --watch` restarts when `.js` files change, but **not** when `.env` changes.

Before starting, write down your real password so you can put it back.

---

## Step 1: Break the password

In `.env`, change one letter of your password, then restart.

**Terminal shows:**

```
Database connection failed: MongoServerError: bad auth : authentication failed
```

**Why:** `bad auth` means Atlas didn't accept the username or password.

**Fix:** put the correct password back and restart. You should see:

```
Successfully connected to MongoDB Atlas!
```

---

## Step 2: Break the database name

In `.env`, change `/digital-library` to `/digital-libary` (missing an "r"), then restart.

**Terminal shows:**

```
Successfully connected to MongoDB Atlas!
```

**No error!** MongoDB quietly opens a new, empty cabinet called `digital-libary`. Our books would be filed in the wrong place, and nothing warns us.

**Lesson:** no error does not mean no mistake. Always double-check the database name.

**Fix:** change it back to `/digital-library`.

---

## Step 3: Move PORT into .env

**`.env`**

```
ATLAS_URI=mongodb+srv://username:password@...mongodb.net/digital-library?appName=LibraryApp
PORT=3000
```

**`server.js`, line 9**

Before:

```js
const PORT = 3000;
```

After:

```js
const PORT = process.env.PORT || 3000;
```

**Why:**
- `process.env.PORT` reads `PORT` from `.env`.
- `|| 3000` is the backup if `PORT` is missing.

**Test:** change `PORT=3000` to `PORT=4000` in `.env` and restart. The terminal should now say `http://localhost:4000`. Change it back to `3000` when you're done.

---

## Step 4: Challenge

In `.env` only, rename `ATLAS_URI` to `ATLAS_URL`, then restart.

**Terminal shows:**

```
MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined"
```

**Why:** `server.js` still asks for `process.env.ATLAS_URI`, but `.env` no longer has a variable with that name, so it is `undefined`. Mongoose gets nothing to connect to.

**Which file has the mistake?** `.env`. The error talks about the code, but the names in both files must match **exactly**.

**Fix:** rename it back to `ATLAS_URI`.

---

## Common mistakes

| What happened | Why | Fix |
|---|---|---|
| "I fixed it but the error is still there" | The server wasn't restarted after editing `.env` | `Ctrl + C`, then `npm run dev` |
| Forgot the real password | Changed it in Step 1 without noting it | Reset it in Atlas: Security > Database & Network Access > Edit > Edit Password |
| Still on port 3000 after changing `PORT` | `server.js` line 9 still says `const PORT = 3000;` | Use `process.env.PORT \|\| 3000` |
| `PORT = 3000` doesn't work | Spaces around `=` in `.env` | Write it as `PORT=3000` |

---

## Before moving on

Check that everything is back to normal:
- the correct password is in `ATLAS_URI`
- `/digital-library` is spelled correctly
- the variable is named `ATLAS_URI`
- the terminal shows `Successfully connected to MongoDB Atlas!`

Lesson 6 builds on this project.

---

## Looking ahead

In Lesson 14, Render gives the app its own port online, and the code uses `process.env.PORT || 3001`. That's the same idea as Step 3.