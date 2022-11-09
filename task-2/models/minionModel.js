const mongoose = require('mongoose');

const MinionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    color: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Minion', MinionSchema);
