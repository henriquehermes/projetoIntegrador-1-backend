const Event = require('../models/EventModel');

module.exports = {
  async index(req, res) {
    const events = await Event.find({});

    return res.json(events);
  },

  async store(req, res) {
    const {
      name,
      message,
      createdBy,
      lat,
      long,
    } = req.body;

    const event = await Event.create({
      name,
      message,
      createdBy,
      lat,
      long,
    });

    return res.json(event);
  },
};
