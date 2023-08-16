const request = require("supertest")
const app = require('./server');

describe('Test app server', () => {
  it('Should get main route', async () => {
    const res = await request(app).get('/')

    // expect(res.statusCode).toBe(200)
    expect(res.body).toHaveProperty('message')
  })
})
