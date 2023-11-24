import {requestFactory} from './requester'

const baseUrl = 'http://localhost:3030/data/ads'

export const profileServiceFactory = (token) => {
    const request = requestFactory(token)
    

const allAdsByUser = async(ownerId)=> request.get(`${baseUrl}?where=_ownerId%3D%22${ownerId}%22`)

return{
    allAdsByUser,
}
}
