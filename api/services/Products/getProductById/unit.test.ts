import { handler } from '.';
import { mockAPIGatewayProxyEvent } from '../../../mocks/tests/mockAPIGatewayProxyEvent';

let mockEvent = {...mockAPIGatewayProxyEvent}

test('returns a 400 if pathParameters event property is null ', async () => {
    mockEvent = {
        ...mockEvent,
        pathParameters: null,
    }
    const res = await handler(mockEvent);
    expect(res.statusCode).toBe(400);
})

test('returns a 404 if id is not found in data', async () => {
    mockEvent = {
        ...mockEvent,
        pathParameters: {id: 'fake_id'},
    }
    const res = await handler(mockEvent);
    expect(res.statusCode).toBe(404);
})

test('returns a 200 if a correct id is given', async () => {
    mockEvent = {
        ...mockEvent,
        pathParameters: {id: '7567ec4b-b10c-48c5-9345-fc73c48a80a1'},
    }
    const res = await handler(mockEvent);
    expect(res.statusCode).toBe(200);
})