const { Router } = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./app/controllers/OngController');
const IncidentController = require('./app/controllers/IncidentController');
const ProfileController = require('./app/controllers/ProfileController');
const SessionsController = require('./app/controllers/SessionsController');

const routes = new Router();

/* Router for create sessions ongs */
routes.post('/sessions', SessionsController.store);

/* Routes for ONG */
routes.post('/ongs',celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    whatsapp: Joi.string().required().min(11).max(12),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2),
  })
}) ,OngController.store);
routes.get('/ongs', OngController.index);


/* Routes for incidents */
routes.post('/incidents', IncidentController.store);

routes.get('/incidents',celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  })
}) ,IncidentController.index);

routes.delete('/incidents/:id',celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  })
}) ,IncidentController.destroy);

/* Router for Profile list specific incidents  */
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}) , ProfileController.index);

module.exports = routes;


/* format uuid ou regex para validar id, na rota profile*/