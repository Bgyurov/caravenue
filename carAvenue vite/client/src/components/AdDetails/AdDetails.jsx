import { useParams,Link } from "react-router-dom"
import { adsServiceFactory } from '../../services/adsService'
import { useEffect, useState } from "react"
import { currencySetter } from "../../services/Convertor"
import { useService } from "../../hooks/useService"
import { AuthContext } from "../../contexts/AuthContext"
import { useContext } from "react"
import './details.css'
export const AdDetails = ({
    onDeleteAdSubmit
}) => {
    const { userId } = useContext(AuthContext)
    const { adId } = useParams()
    const [ad, setAd] = useState({})
    const adService = useService(adsServiceFactory)
    useEffect(() => {
        adService.getOne(adId)
            .then(result => {
                setAd(result)
            })
    }, [adId])

    const onDelete = async () => {
        onDeleteAdSubmit(adId)
    }

    const isOwner = ad._ownerId === userId



    return (


        <section id="vehicle-details">
            <h1>Vehicle Details</h1>
            <div className="info-section">

                <div className="vehicle-header">
                    <img className="vehicle-img" src={ad.imageUrl} />
                    <h1>{ad.car} {ad.model} {ad.modification}</h1>
                    <span className="specs">Engine Type: {ad.etype}</span>
                    <span className="specs">Transmision: {ad.transmition}</span>
                    <span className="specs">Power: {ad.hppower}[h.p]</span>
                    <span className="specs">Euro category: {ad.ecategory}</span>
                    <span className="specs">Date of manufacture: {ad.manufacturedate}</span>
                    <br></br>
                    <span className="price">Price: {ad.price} {currencySetter(ad.currency)}</span>





                </div>

                <p className="text">
                    {ad.description}
                </p>
                <span className="phone">Contact owner:  {ad.contactphone}</span>

              

                <div className="buttons">
                {isOwner && (
                    <>
                       <Link to={`/catalog/${ad._id}/edit`} className="button">Edit</Link>
                        <button onClick={onDelete} className="button">Delete</button>
                    </>
                        )}

                {!isOwner && (
                    <>
                    <button href="#" className="vote-up">Favorite</button>
                    <p className="thanks-for-vote">You are already watching this offer </p>
                    
                    </>
                )}
                </div>
               </div>


            

          

        </section>
    )
}