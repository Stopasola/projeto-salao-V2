const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')


// ex de um teste em que foi na rota, salvou no db, retornou
describe('ONG', () =>{
    // faz as migrations
    beforeEach(async () => {
        
        await connection.migrate.rollback(); // sempre usar, afim de nm crescer muito o bd de teste e n influenciar em outros testes furturos
        await connection.migrate.latest();
    });

    afterAll(async ()  => {
        await connection.destroy();
    });

    // id criada no banco de dados de teste
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        // set('Authorization', 'asd') essa linha é executada quando é necessario uma authorization como na route profile 
        .send({
            name: "APAD2",
            email : "a@a.com",
            whatsapp : "45998317900",
            city: "Cascavel",
            uf: "PR"
            
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        //console.log(response.body)
    });
});  