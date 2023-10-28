import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/ads'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    return ads
}

export const getOne = async (adId) => {
    const result = await request.get(`${baseUrl}/${adId}`)
    return result
}

export const create = async (adData) => {
    const result = await request.post(baseUrl,adData)

    return result
}