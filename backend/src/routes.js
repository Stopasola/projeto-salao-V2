const express = require('express')
const  {celebrate, Segments, Joi} = require('celebrate')

// Desacoplamento de rotas do express na var routes
const routes = express.Router(); 

// Export Page Files - All Controllers 
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController');
const { request } = require('express');

// Test route

routes.post('/users', (request, response) => {
    
    const body = request.body;

    console.log(body);
    return response.json({
        evento: 'Suruba',
        aluno: 'Fernando'
    });
});


module.exports = routes; // Exportar var usando node 


// Below we have example routes, will be deleted!

/*routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

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
