import express from 'express';
import getGreeting from './greetings.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(getGreeting('Alex'));
});

app.listen(PORT, () => console.log('Server is running!'));
