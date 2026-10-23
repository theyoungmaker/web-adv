import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('Hi! I am Alex and I am learning Express.');
});

app.get('/fav-food', (req, res) => {
  res.send('<h1>🍗 Chicken Rice</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});
