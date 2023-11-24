import { useParams,Link } from "react-router-dom"
import { adsServiceFactory } from '../../services/adsService'
import { useEffect, useState } from "react"
import { currencyConverter,engineTypeConverter,transmitionConverter,yearConverter } from "../../services/convertor.tsx"

import { useService } from "../../hooks/useService"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import './details.css'
export const AdDetails = ({
    onDeleteAdSubmit
}) => {
    const { userId,isAuthenticated } = useContext(AuthContext)
    const { adId } = useParams()
    const [ad, setAd] = useState({})
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isFavourite , setIsFavorite] = useState(false)
    const adService = useService(adsServiceFactory)
    useEffect(() => {
        adService.getOne(adId)
            .then(result => {
                setAd(result)
            })
    }, [adId])
    useEffect(() => {
        adService.getOne(adId)
            .then(result => {
                setAd(result)
            })
    }, [isFavourite])

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
   
   
    // if(favouriteList != undefined){
    //     let favourite = favouriteList.find(item => item.equals(userId))
    //     console.log(favourite)
    //     if(favourite){
    //         setIsFavorite(true)
    //     }

    // }

    async function handleFavClick(){
        await adService.favorite(userId , adId)
        console.log('inside')
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