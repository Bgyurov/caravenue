import * as request from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/ads'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    return ads
}
export const getLastThree = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    const lastThreeAds = ads.slice(-3)
    return lastThreeAds
}

export const getOne = async (adId) => {
    const result = await request.get(`${baseUrl}/${adId}`)
    return result
}

export const create = async (adData) => {
    const result = await request.post(baseUrl,adData)

    return result
}