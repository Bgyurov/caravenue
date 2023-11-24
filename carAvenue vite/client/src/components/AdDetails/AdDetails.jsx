import { useParams,Link } from "react-router-dom"
import { adsServiceFactory } from '../../services/adsService'
import { useEffect, useState } from "react"
import { currencyConverter,engineTypeConverter,transmitionConverter,yearConverter } from "../../services/convertor.tsx"

import { useService } from "../../hooks/useService"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import './details.css'
import { authServiceFactory } from "../../services/authService.tsx"
export const AdDetails = ({
    onDeleteAdSubmit
}) => {
    const { userId,isAuthenticated } = useContext(AuthContext)
    const { adId } = useParams()
    const [ad, setAd] = useState({})
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isFavourite , setIsFavorite] = useState(false)
    const adService = useService(adsServiceFactory)
    const authService = useService(authServiceFactory)
    
    useEffect(() => {
        adService.getOneDetails(adId)
            .then(result => {
                setAd(result[0])
               if(result[0].favourites.find((item)=> item._ownerId === userId)){
                // setIsFavorite(true)
               }
            })
    }, [adId])
   

    const onDelete = async () => {
        onDeleteAdSubmit(adId)
    }

    const isOwner = ad._ownerId === userId
    let photos = []

    photos.push(ad.imageUrl)
    if(ad.imageUrl2){
        photos.push(ad.imageUrl2)
    }
    useEffect(() => {
      // Set up an interval to change the photo every 3 seconds (adjust as needed)
      const intervalId = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 5000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, [photos]);
   
   console.log(ad)
   
    

    async function handleFavClick(){
       let favs =  await adService.favorite2( adId)
       
       setAd((prevState) => ({
        ...prevState,
        favourites: { ...prevState.favourites, newestFavs },
      }));
       console.log(ad.favourites)
    }


    return (


        <section id="vehicle-details">
            <h1>Vehicle Details</h1>
            <div className="info-section">

                <div className="vehicle-header">
                    <img className="vehicle-img" src={photos[currentPhotoIndex]} />
                    <h1>{ad.car} {ad.model} {ad.modification}</h1>
                    <span className="specs">Тип двигател: {engineTypeConverter(ad.etype)}</span>
                    <span className="specs">Скоростна кутия: {transmitionConverter(ad.transmition)}</span>
                    <span className="specs">Мощност: {ad.hppower}[к.с]</span>
                    <span className="specs">Евростандарт: {ad.ecategory}</span>
                    <span className="specs">Година на производство(м/г): {yearConverter(ad.manufacturedate)}</span>
                    <br></br>
                    <span className="price">Цена: {ad.price} {currencyConverter(ad.currency)}</span>





                </div>

                <p className="text">
                    {ad.description}
                </p>
                <span className="phone">Телефон за връзка:  {ad.contactphone}</span>

              
                {isAuthenticated && (
                     <div className="buttons">
                {isOwner && (
                    <>
                       <Link to={`/catalog/${ad._id}/edit`} className="button">Edit</Link>
                        <Link to={`/catalog`} onClick={onDelete} className="button">Delete</Link>
                    </>
                        )}

                {!isOwner && (
                    <>
                    {!isFavourite && (
                        <button href={`/catalog/${ad._id}`} onClick={handleFavClick} className="vote-up">Favorite</button>
                    )}

                    {isFavourite && (
                        
                    <p className="thanks-for-vote">You are already watching this offer </p>
                    )}
                    
                    </>
                )}
                </div>
                )}
                              </div>


          

        </section>
    )
}