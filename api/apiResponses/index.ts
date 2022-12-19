import { Product } from "../types"

const headers = {
    "Access-Control-Allow-Headers" : "Content-Type",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
}

export const apiResponses = {
    _200: (body: Product[] | Product) => {
        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(body, null, 2),
        }
    },
    _400: (body: {[key: string]: unknown}) => {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify(body, null, 2),
        }
    }
}
