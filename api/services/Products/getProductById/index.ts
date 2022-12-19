import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

import { products } from '../../../Mocks/products';
import { apiResponses } from '../../../apiResponses';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    try {
        if (!event.pathParameters || !event.pathParameters.id) {
            return apiResponses._400({ message: 'missing id from the path parameters.' });
        }

        const { id } = event.pathParameters;

        const selectedProduct = products.find(product => product.id === id)

        if (selectedProduct) {
            return apiResponses._200(selectedProduct);
        }
        return apiResponses._400({ message: 'Invalid id.' });
    } catch (err) {
        return apiResponses._400({message: 'Error: Unable to get product by id.'});
    }
}
