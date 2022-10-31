import request from 'supertest';

const payload = {
  title: 'foo',
  body: 'bar',
  userId: 1,
};

const expectedResponse = {
  id: 101,
  title: 'foo',
  body: 'bar',
  userId: 1,
};

describe('API jsonplaceholder POST request', () =>
{
  it('should create a new post', async () =>
  {
    const res = await request('https://jsonplaceholder.typicode.com')
      .post('/posts')
      .send(payload);

    expect(res.status).toBe(201);
    expect(res.body).toEqual(expectedResponse);
  });
});
