import { CatalogItem } from "./CatalogItem/CatalogItem.jsx"
import '../Catalog/all-ads.css'
import { useContext } from "react"
import AdsContext from "../../contexts/AdsContext.jsx"
export const Catalog = ()=>{
    const {ads} = useContext(AdsContext)
    console.log(ads)
    return (
        <section id="catalog-page">
        <h1>All Offers</h1>
       
    {ads.map(x => 
    <CatalogItem key={x._id} {...x} />
    )}

        {ads.length === 0 && (
            <h3 className="no-articles">No offers yet</h3>

        )}
    </section>
    )
}