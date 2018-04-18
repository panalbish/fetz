import nock from 'nock';
import fetz from '../index';

const demoPayload = {
  action: 'requestDemoChange',
  data: 'hey@im.new'
};

const demoResponse = {
  name: 'Max',
  email: 'hey@im.new'
};
describe('fetz demo', () => {
  test('make patch request', async () => {
    nock('http://localhost:3000')
      .patch('/demo', demoPayload)
      .reply(200, demoResponse);

    const response = await fetz({
      requestUrl: 'http://localhost:3000/demo',
      body: demoPayload,
      method: 'PATCH'
    });
    const data = JSON.parse(await response.text());
    expect(response.status).toBe(200);
    expect(data).toEqual(demoResponse);
    nock.cleanAll();
  });

  test('make GET request', async () => {
    nock('http://localhost:3000')
      .get('/demo')
      .reply(200, demoResponse);

    const response = await fetz({
      requestUrl: 'http://localhost:3000/demo',
      method: 'GET'
    });
    const data = JSON.parse(await response.text());
    expect(response.status).toBe(200);
    expect(data).toEqual(demoResponse);
    nock.cleanAll();
  });
});
