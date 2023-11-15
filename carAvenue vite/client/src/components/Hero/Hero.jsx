import heroPhoto from '../../assets/hero.png'
import { HeroItem } from './HeroItem/HeroItem.jsx'
import './welcome.css'

export const Hero =({
    heroAds,
}) =>{
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
           {/*               <!-- Display div: with information about every game (if any) -->*/}
           {heroAds.map(x => 
    <HeroItem key={x._id} {...x} />
    )}

   
        
            {heroAds.length === 0 && (
                
                <p className="no-articles">No ads yet</p>

            )}
    </div>
</section>
)
}