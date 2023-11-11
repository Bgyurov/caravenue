import {requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/ads'

export const adsServiceFactory = (token) => {
    const request = requestFactory(token)
    
 const getAll = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    return ads
}
 const getLastThree = async () => {
    const result = await request.get(baseUrl)
    const ads  = Object.values(result)
    const lastThreeAds = ads.slice(-3)
    return lastThreeAds
}

 const getOne = async (adId) => {
    const result = await request.get(`${baseUrl}/${adId}`)
    return result
}

 const create = async (adData) => {
    const result = await request.post(baseUrl,adData)

    return result
}
 const remove = async (adId) => {
    const result = await request.delete(`${baseUrl}/${adId}`)
    return result
}
return{
    getAll,
    getLastThree,
    getOne,
    create,
    remove,
}
}
