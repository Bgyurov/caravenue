import { Link } from "react-router-dom"
import { currencySetter } from "../../../services/Convertor"
export const CatalogItem = ({
        car ,
        model,
        modification ,
        milleage,
        imageUrl,
        price,
        currency,
        _id
}) => {

    return (
        <div className="offer">
        <div className="offer-info">
            <img src={imageUrl} />
            <h6>{car} {model} {modification}</h6>
            <h2>{price} {currencySetter(currency)}</h2>
            <h6>{milleage}km</h6>

            <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
        </div>
    </div>
    )
}