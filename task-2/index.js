const express = require('express');
const app = express();

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const minionRoutes = require('./routes/minionRoutes');
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('Mongoose connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/minions', minionRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running');
});
