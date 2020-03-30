const mongoose = require('mongoose');

const EventModel = new mongoose.Schema({
  name: String,
  message: String,
  createdBy: String,
  lat: String,
  long: String,
});

module.exports = mongoose.model('Event', EventModel);
