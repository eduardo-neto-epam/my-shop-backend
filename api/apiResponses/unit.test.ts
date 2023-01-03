import { apiResponses } from ".";

const testBody = { id: '1', description: 'test-description', price: 12, title: 'title-test' };

test('apiResponses is an object', () => {
    expect(typeof apiResponses).toBe('object');
});

test('Method _200 returns correctly', () => {
    const res = apiResponses._200(testBody);
    expect(res.statusCode).toBe(200);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Access-Control-Allow-Headers']).toBe('Content-Type');
    expect(res.headers['Content-Type']).toBe('application/json');
    expect(res.headers['Access-Control-Allow-Methods']).toBe('*');
    expect(res.headers['Access-Control-Allow-Origin']).toBe('*');
})

test('Method _400 returns correctly', () => {
    const res = apiResponses._400(testBody);
    expect(res.statusCode).toBe(400);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Access-Control-Allow-Headers']).toBe('Content-Type');
    expect(res.headers['Content-Type']).toBe('application/json');
    expect(res.headers['Access-Control-Allow-Methods']).toBe('*');
    expect(res.headers['Access-Control-Allow-Origin']).toBe('*');
})

test('Method _404 returns correctly', () => {
    const res = apiResponses._404(testBody);
    expect(res.statusCode).toBe(404);
    expect(typeof res.body).toBe('string');
    expect(res.headers['Access-Control-Allow-Headers']).toBe('Content-Type');
    expect(res.headers['Content-Type']).toBe('application/json');
    expect(res.headers['Access-Control-Allow-Methods']).toBe('*');
    expect(res.headers['Access-Control-Allow-Origin']).toBe('*');
})

test('_setResponse', () => {
    const res = apiResponses._setResponse(382, { any: 'thing' });
    expect(res.statusCode).toBe(382);
    expect(res.body).toBe(JSON.stringify({ any: 'thing' }));
    expect(res.headers['Access-Control-Allow-Headers']).toBe('Content-Type');
    expect(res.headers['Content-Type']).toBe('application/json');
    expect(res.headers['Access-Control-Allow-Methods']).toBe('*');
    expect(res.headers['Access-Control-Allow-Origin']).toBe('*');
})