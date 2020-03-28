const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
  beforeEach( async () => {
     await connection.migrate.rollback();
     await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  })

  it('Should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD INSTITUTO",
        email: "contato@teste.com",
        whatsapp: "47000000000",
        city: "Rio do sul",
        uf: "SC"
      });

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });
});