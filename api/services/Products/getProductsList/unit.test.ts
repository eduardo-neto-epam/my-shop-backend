import { handler } from ".";
import { mockAPIGatewayProxyEvent } from '../../../mocks/tests/mockAPIGatewayProxyEvent';
import { products } from "../../../mocks/data/products";

let mockEvent = {...mockAPIGatewayProxyEvent}

test('when getting a response with 200 status code, should have a list of products as body', async () => {
    const res = await handler(mockEvent);
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe(JSON.stringify(products));
})
