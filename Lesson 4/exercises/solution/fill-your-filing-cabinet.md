# Lesson 4 Exercise: Fill Your Filing Cabinet (Sample Solution)

**Where:** MongoDB Atlas > Data Explorer (no code needed)
**Time:** about 15 minutes
**Needs:** the Atlas cluster from the Lesson 4 tutorial (Steps 1-4)

---

## Step 1: Create the database

1. In Atlas, open **Data Explorer**.
2. Click **+ Create Database**.
3. Enter:
   - Database name: `practice`
   - Collection name: `movies`
4. Click **Create**.

> We use `practice` so it can't be mixed up with the real `movie-gallery` database in Lesson 11.

---

## Step 2: Insert 3 movies

Click **Insert Document** and add each movie one at a time:

```json
{ "title": "The Lion King", "year": 1994, "genre": "Animation" }
```

```json
{ "title": "Frozen", "year": 2013, "genre": "Animation" }
```

```json
{ "title": "Avengers: Endgame", "year": 2019, "genre": "Action" }
```

Students' movies will differ. That's fine, as long as:
- each document has a `title`, `year` and `genre`
- at least one movie is from **before 2000**
- `year` is a **number** (`1994`), not text (`"1994"`)

MongoDB adds an `_id` to every document automatically. It's the unique label on each file in the cabinet.

---

## Step 3: Filter for newer movies

Type this in the **Filter** bar and click **Find**:

```js
{ year: { $gt: 2000 } }
```

**Result:** Frozen, Avengers: Endgame

**Why:** `$gt` means **greater than**, so The Lion King (1994) is left out.

---

## Step 4: Challenge

**Movies from before 2000:**

```js
{ year: { $lt: 2000 } }
```

**Result:** The Lion King

`$lt` means **less than**.

**Only Animation movies:**

```js
{ genre: "Animation" }
```

**Result:** The Lion King, Frozen

Text must match exactly, including capital letters: `{ genre: "animation" }` finds nothing.

---

## Common mistakes

| What happened | Why | Fix |
|---|---|---|
| A movie is missing from the `$gt` / `$lt` results | `year` was saved as text (`"1994"`) | Edit the document and remove the quotes around the year |
| The genre filter finds nothing | Capitals don't match (`"animation"` vs `"Animation"`) | Match the text exactly |
| Insert Document shows an error | Missing comma or quote in the JSON | Check every field is `"key": value` with commas between them |

---

## Fast finishers

Add a 4th movie with an **extra field**, for example:

```json
{ "title": "Inside Out", "year": 2015, "genre": "Animation", "rating": 5 }
```

MongoDB accepts it, because documents in one collection don't need the same fields. In Lesson 6, Mongoose schemas add rules on top of this.

---

## Looking ahead

Filters have the same `{ field: value }` shape as a JavaScript object. From Lesson 7, students write the same kind of query in code with Mongoose, e.g. `Book.find()`.