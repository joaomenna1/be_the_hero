const { Router } = require('express');

const OngController = require('./app/controllers/OngController');
const IncidentController = require('./app/controllers/IncidentController');
const ProfileController = require('./app/controllers/ProfileController');
const SessionsController = require('./app/controllers/SessionsController');

const routes = new Router();

/* Router for create sessions ongs */
routes.post('/sessions', SessionsController.store);

/* Routes for ONG */
routes.post('/ongs', OngController.store);
routes.get('/ongs', OngController.index);


/* Routes for incidents */
routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.destroy);

/* Router for Profile list specific incidents  */
routes.get('/profile', ProfileController.index);

module.exports = routes;