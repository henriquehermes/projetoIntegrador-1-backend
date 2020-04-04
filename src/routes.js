const express = require('express');

const EventController = require('./controllers/EventController');

const routes = express.Router();

routes.post('/event', EventController.store);
routes.get('/events', EventController.index);
routes.delete('/event/:id', EventController.delete);


module.exports = routes;
