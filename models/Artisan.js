const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  name: String,
  rate: Number,
  isNew: Boolean,
  jobsCompleted: Number,
  bio: String,
  imageUrl: String,
  availability: [String]  // e.g. ["weekly", "monthly"]
}, { timestamps: true });

module.exports = mongoose.model('Artisan', artisanSchema);
