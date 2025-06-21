const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const artisanRoutes = require('./routes/artisan');


const authRoutes = require('./routes/auth');


dotenv.config();

const app = express();
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Artisan API running');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
  });
}).catch(err => console.error('MongoDB connection error:', err));



app.use('/api/auth', authRoutes);
app.use('/api/artisans', artisanRoutes);
