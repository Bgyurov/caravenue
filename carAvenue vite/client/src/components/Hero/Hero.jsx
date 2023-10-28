import heroPhoto from '../../assets/hero.png'


export const Hero =() =>{
    return ( 
    <section id="welcome-world">

    <div className="welcome-message">
        <h2>Rev Up Your Dreams at </h2>
        <h3>CarAvenue!</h3>
    </div>
    <img src={heroPhoto} alt="hero" />
    <br />

    <div id="home-page">
        <h1>Latest Ad</h1>

        {/*               <!-- Display div: with information about every game (if any) -->*/}
        <div className="game">
            <div className="image-wrap">
                <img src="https://www.topgear.com/sites/default/files/images/cars-road-test/2019/08/4d2352886115db6b2662e488e9aebb1a/p90348944_highres.jpg" />
            </div>
            <h3>BMW 750</h3>
            <h4>2020</h4>

            <div className="data-buttons">
                <a href="#" className="btn details-btn">Details</a>
            </div>
        </div>
        <div className="game">
            <div className="image-wrap">
                <img src="https://www.topgear.com/sites/default/files/images/cars-road-test/2019/08/4d2352886115db6b2662e488e9aebb1a/p90348944_highres.jpg" />
            </div>
            <h3>AUDI A7</h3>
            <h4>2017</h4>

            <div className="data-buttons">
                <a href="#" className="btn details-btn">Details</a>
            </div>
        </div>
        <div className="game">
            <div className="image-wrap">
                <img src="https://www.topgear.com/sites/default/files/images/cars-road-test/2019/08/4d2352886115db6b2662e488e9aebb1a/p90348944_highres.jpg" />
            </div>
            <h3>Mercedes S  </h3>
            <h4>2023</h4>

            <div className="data-buttons">
                <a href="#" className="btn details-btn">Details</a>
            </div>
        </div>

        {/*                           <!-- Display paragraph: If there is no games  -->*/}
        <p className="no-articles">No ads yet</p>
    </div>
</section>
)
}