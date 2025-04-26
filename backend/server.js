const express = require('express');
const mongoose = require('mongoose');
const devoirRoutes = require('./routes/devoir');

const app = express();
const port = 3000;

// Connection to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/biogy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());

// Use devoir routes
app.use('/api/devoir', devoirRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});