import { useState,useEffect } from 'react'
import { Routes, Route,useNavigate ,useParams} from 'react-router-dom'
import {AuthContext} from './contexts/AuthContext'

import {adsServiceFactory} from './services/adsService'

import {authServiceFactory} from './services/authService'
import { Navigation } from './components/Navigation/Navigation'
import { Hero } from './components/Hero/Hero'
import { Login } from './components/Login/Login'
import { Logout } from './components/Logout/Logout'

import {Register} from './components/Register/Register.jsx'
import {CreateAd} from './components/CreateAd/CreateAd.jsx'
import {Catalog} from './components/Catalog/Catalog.jsx'
import { Search } from './components/Search/Search.jsx'
import { AdDetails } from './components/AdDetails/AdDetails.jsx'
function App() {
    const navigate = useNavigate()
    const [ads, setAds] = useState([]);
    const [heroAds , setHeroAds] = useState([])
    const [auth,setAuth] = useState ({})

    const adsService = adsServiceFactory(auth.accessToken)
    const authSevice = authServiceFactory(auth.accessToken)
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

    const onLoginSubmit = async (data) => {
        try {
            const result = await authSevice.login(data)
            setAuth(result) 
            navigate('/')
        } catch (error) {
            //TODO Error
            console.log(error.message)
        }
       
    }
    const onRegisterSubmit = async (values) => {
        const {confirmPass, ...registerData} = values
        if(confirmPass !== registerData.password){
            return 
            //todo error
        }
        try {
            const result = await authSevice.register(registerData)

            setAuth(result)
            navigate('/')
        } catch (error) {
             //TODO Error
             console.log(error.message)
        }
    }

    const onLogout =  async () => {
        await authSevice.logout();

        setAuth({})
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        
    }

    return (
        <>
    <AuthContext.Provider value={context}>

   
            <Navigation />
            {/*<!--Home Page-->*/}
            <main id='main-content'>
                <Routes>
                    <Route path='/' element={<Hero heroAds={heroAds}/>}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/logout' element={<Logout />}/>
                    
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/create-ad' element={<CreateAd onCreateAdSubmit={onCreateAdSubmit}/>}/>
                    <Route path='/catalog' element={<Catalog ads={ads}/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/catalog/:adId' element={<AdDetails onDeleteAdSubmit={onDeleteAdSubmit} />} />
                   

                </Routes>    
            </main>
            </AuthContext.Provider>
        </>
    )
}

export default App
