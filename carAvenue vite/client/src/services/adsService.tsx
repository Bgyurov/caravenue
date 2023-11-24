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
 const remove =  (adId) => {
    const result =  request.delete(`${baseUrl}/${adId}`)
    return result
}
const edit = async (adId,adData) => request.put(`${baseUrl}/${adId}`,adData)

const favorite = async (userId, publicationId) => {
    
      // Fetch the existing publication data
      const existingAd = await request.get(`${baseUrl}/${publicationId}`);
      // Update the favList in the existingAd data
      existingAd.favList.push(userId);
  
      // Make the PUT request to update the publication with the modified data
      const updatedAd = await request.patch(`${baseUrl}/${publicationId}`, existingAd);
    console.log(updatedAd)
      return updatedAd;
   
     
  };

const searchByName = async(search)=> request.get(`${baseUrl}?where=car%3D%22${search}%22`)

return{
    getAll,
    getLastThree,
    getOne,
    create,
    remove,
    favorite,
    edit,
    searchByName,
}
}
