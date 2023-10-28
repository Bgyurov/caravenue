import { CatalogItem } from "./CatalogItem/CatalogItem.jsx"

export const Catalog = ({ads})=>{
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