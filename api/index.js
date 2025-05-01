require('dotenv').config();
const express = require('express');
const serverless = require("serverless-http");
const cors = require('cors');
const app = express();
const PORT = 5000;

const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const feedRoutes = require('./routes/feed');

app.use(cors());
app.use(express.json());

app.use('/', mainRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/feed', feedRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
module.exports.handler = serverless(app);