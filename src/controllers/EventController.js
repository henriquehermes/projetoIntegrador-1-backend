const Event = require('../models/EventModel');

const longRegex = /^(\+|-)?(?:180(?:(?:\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\.[0-9]{1,6})?))$/;
const latRegex = /^(\+|-)?(?:90(?:(?:\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\.[0-9]{1,6})?))$/;

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

    if (
      !name
      || !message
      || !createdBy
      || !latRegex.test(lat)
      || !longRegex.test(long)
    ) { return res.sendStatus(400); }

    const event = await Event.create({
      name,
      message,
      createdBy,
      lat,
      long,
    });

    return res.json(event);
  },

  async delete(req, res) {
    const result = await Event.findByIdAndDelete({
      _id: req.params.id,
    });

    return res.json(result);
  },
};
