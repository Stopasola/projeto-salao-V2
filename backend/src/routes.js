const express = require('express')
//const  {celebrate, Segments, Joi} = require('celebrate')

// Desacoplamento de rotas do express na var routes
const routes = express.Router(); 

// Export Page Files - All Controllers 
const CLientController = require('./controllers/ClientController')


// Client Routes

routes.post('/client', CLientController.create);
routes.get('/client', CLientController.index);


module.exports = routes; // Exportar var usando node 


// Below we have example routes, will be deleted!

/*
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string ().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}), OngController.create); // a validação deve vir antes

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(), 
    })
}),IncidentController.index);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
     [Segments.PARAMS]: Joi.object().keys({
         id: Joi.number().required()
     })
}), IncidentController.delete);*/
