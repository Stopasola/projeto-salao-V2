const connection =  require('../database/connection')
const crypto = require('crypto')
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {

    // List Clients
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        return response.json(ongs)
    },

    // Create Clients
    async create(request, response){
        const {name, cpf, phone, address, cep, email, birthdate, password} = request.body;
        
        const id = generateUniqueId();
        console.log('jesus')
         await connection('person').insert({
            name,
            cpf,
            phone,
            address,
            cep,
            email,
            birthdate, 
            password, 
         }).;
        return response.json({id});
    }
};

