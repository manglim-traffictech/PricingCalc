/** @jest-environment node */
const request = require('supertest');
const app = require('../server');

describe('server', () => {
  it('serves index.html at root', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toContain('<div id="root"></div>');
  });
});
