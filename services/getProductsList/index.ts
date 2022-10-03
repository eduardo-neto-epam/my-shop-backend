import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { products } from './Mocks/products';
import { apiResponses } from './apiResponses';

export const handler = async (_event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        return apiResponses._200({products});
    } catch (err) {
        return apiResponses._400({message: 'Error: Unable to get products.'});
    }
}