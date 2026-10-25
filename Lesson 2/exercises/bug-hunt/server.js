import express from 'express';

const app = express;
const PORT = 3000;

app.get('/', (req, res) => {
  res.sendd('Welcome to my server!');
});

app.get('about', (req, res) => {
  res.send('This server was built by me!');
});

app.listen(PORT, () => console.log(‘Server is running!’));
