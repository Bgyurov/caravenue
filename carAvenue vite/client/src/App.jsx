import { useState,useEffect } from 'react'
import { Routes, Route,useNavigate ,useParams} from 'react-router-dom'


import * as adsService from './services/adsService'

import { Navigation } from './components/Navigation/Navigation'
import { Hero } from './components/Hero/Hero'
import { Login } from './components/Login/Login'
import {Register} from './components/Register/Register.jsx'
import {CreateAd} from './components/CreateAd/CreateAd.jsx'
import {Catalog} from './components/Catalog/Catalog.jsx'
import { Search } from './components/Search/Search.jsx'
import { AdDetails } from './components/AdDetails/AdDetails.jsx'
function App() {
    const navigate = useNavigate()
    const [ads, setAds] = useState([]);
    const [heroAds , setHeroAds] = useState([])
    useEffect(() => {
        adsService.getAll()
            .then(result => {
                setAds(result)
            })
    }, []);

    useEffect(() => {
        adsService.getLastThree()
            .then(result => {
                setHeroAds(result)
            })
    }, []);

    const onCreateAdSubmit = async (data) =>{
        const newAd = await adsService.create(data)
        //add ad to state
        setAds(state=>[...state,newAd])
        setHeroAds(state=>[...state,newAd])
        //redirect page
        navigate('/catalog')
    }
    const onDeleteAdSubmit = async (adId) => {
        await adsService.remove(adId)
        setAds(state => state.filter(ad => ad._id !== adId))
        setHeroAds(state => state.filter(ad => ad._id !== adId))
        navigate('/catalog')
        
    }

    return (
        <>

            <Navigation />
            {/*<!--Home Page-->*/}
            <main id='main-content'>
                <Routes>
                    <Route path='/' element={<Hero heroAds={heroAds}/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/create-ad' element={<CreateAd onCreateAdSubmit={onCreateAdSubmit}/>}/>
                    <Route path='/catalog' element={<Catalog ads={ads}/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/catalog/:adId' element={<AdDetails onDeleteAdSubmit={onDeleteAdSubmit} />} />
                   

                </Routes>    
            </main>
        </>
    )
}

export default App
