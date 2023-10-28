export const Search = ()=>{
    return (
        <section id="search-page">
        <h1>Search</h1>
        <h2>Serch by name</h2>
        <form action="/" method="GET">
            <input type="text" className="search" name="search" placeholder="Search..." />
            <input type="submit" value="search" />
        </form>
        {/*<!-- Display div: with information about every game (if any) -->*/}
        <div className="offer">
            <div className="offer-info">
                <img src="https://www.topgear.com/sites/default/files/images/cars-road-test/2019/08/4d2352886115db6b2662e488e9aebb1a/p90348944_highres.jpg" />
                <h6>BMW 750 LI</h6>
                <h2>145 000$</h2>
                <h6>34000km</h6>

                <a href="#" className="details-button">Details</a>
            </div>

        </div>


        {/* <!-- Display paragraph: If there is no games  -->*/}
        <h3 className="no-articles">Sorry, we couldn't find any results matching your search criteria</h3>
    </section>
    )
}