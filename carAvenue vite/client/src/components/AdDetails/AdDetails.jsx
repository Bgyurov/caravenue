import { useParams } from "react-router-dom"
import * as adService from '../../services/adsService'
import { useEffect, useState } from "react"
export const AdDetails = ({
    onDeleteAdSubmit
}) => {

    const { adId } = useParams()
    const [ad, setAd] = useState({})

    useEffect(() => {
        adService.getOne(adId)
            .then(result => {
                setAd(result)
            })
    }, [adId])

    const onDelete = async () => {
        onDeleteAdSubmit(adId)
        
    }
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




                </div>

                <p className="text">
                    {ad.description}
                </p>
                <span className="phone">Contact owner:  {ad.contactphone}</span>

                {/*                                                                 <!-- Bonus ( for Guests and Users ) -->
*/}                                                                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/*                                                                     <!-- list all comments for current game (If any) -->
*/}                                                                    <li className="comment">
                            <p>Content: The price is good.</p>
                        </li>
                        <li className="comment">
                            <p>Content: Bad engine .</p>
                        </li>

                    </ul>
                    {/*                                                                   <!-- Display paragraph: If there are no games in the database -->
*/}                                                                  <p className="no-comment">No comments.</p>
                </div>

                {/*                                                                 <!-- Edit/Delete buttons ( Only for creator of this game )  -->
*/}                                                                <div className="buttons">
                    <button href="#" className="button">Edit</button>
                    <button onClick={onDelete} className="button">Delete</button>
                    <button href="#" className="vote-up">Favorite</button>

                    <p className="thanks-for-vote">You are already watching this offer </p>

                </div>
            </div>

            {/* <!-- Bonus -->*/}
            {/*<!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->*/}                                                            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    )
}