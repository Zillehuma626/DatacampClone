const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
},{ timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
