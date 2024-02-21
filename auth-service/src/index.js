const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Auth Service is running');
});

app.listen(port, () => {
  console.log(`Auth Service listening at http://localhost:${port}`);
});