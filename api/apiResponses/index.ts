import { Product, Products } from "../types"

export const apiResponses = {
    _setResponse(statusCode = 502, data = {}) {
        return {
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Content-Type" : "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            },
            statusCode,
            body: JSON.stringify(data),
        }
    },
    _200(body: Products | Product) {
        return this._setResponse(200, body)
    },
    _400(body: {[key: string]: unknown}) {
        return this._setResponse(400, body)
    },
    _404(body: {[key: string]: unknown}) {
        return this._setResponse(404, body)
    },
}
