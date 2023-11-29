import { useState,useEffect } from 'react'
import { Routes, Route,useNavigate ,useParams} from 'react-router-dom'
import {AuthContext} from './contexts/AuthContext'
import { Alert,Snackbar } from '@mui/material';
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
import { EditAd } from './components/EditAd/EditAd.jsx'
import Profile from './components/Profile/Profile.jsx';
import usePersistedState from './hooks/usePersistantState.js';
import AuthGuard from './guards/AuthGuard.jsx';
function App() {
    const navigate = useNavigate()
    const [ads, setAds] = useState([]);
    const [heroAds , setHeroAds] = useState([])
    const [auth,setAuth] = usePersistedState('auth',{})
    const [successMsg , setSuccessMsg] = useState('')
    const [error, setError] = useState('')

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
        setSuccessMsg('You succesfull add your ad . Good Luck!')
        navigate('/catalog')
    }
    const handleCloseMsg = () => {
        setSuccessMsg('');
        setError('')
      };
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
            setSuccessMsg('Welcome again!')
        } catch (error) {
            //TODO Error
            setError(error.message)
        }
       
    }
    const onRegisterSubmit = async (values) => {
        const {confirmPass ,...registerData} = values
        if(confirmPass !== registerData.password){
       
            setError('Please ensure that the password and confirm password fields match')
            return 
        }
        
        if(registerData.password.length < 5){
            setError('The password should be more than 5 symbols')
            return
        }
        
       
             
        

        try {
            const result = await authSevice.register(registerData)

            setAuth(result)
            navigate('/')
        } catch (error) {
             //TODO Error
                 setError(error.message)
            

             
        }
    }

    const onLogout =  async () => {
        await authSevice.logout();

        setAuth({})
    }
    const onAdEditSubmit = async (values) => {
       const result =  await adsService.edit(values._id,values)
       setAds(state=> state.map(x => x._id === values._id ? result : x))
            navigate(`/catalog/${values._id}`)
    }


  

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        userName: auth.username,
        isAuthenticated: !!auth.accessToken,
                
    }

    return (
        <>
    <AuthContext.Provider value={context}>

   
         
   
            <Navigation />
            <main id='main-content'>
                {successMsg && (
                <Snackbar
                     open={successMsg}
                      autoHideDuration={6000} 
                      onClose={handleCloseMsg}
                >

        <Alert onClose={handleCloseMsg} severity="success">
          {successMsg}
        </Alert>
                </Snackbar>

                )}
                {error && (
        <Snackbar  
        open={error} 
        autoHideDuration={4500}
         onClose={handleCloseMsg}>

        <Alert  onClose={handleCloseMsg} severity="error">
          {error}
        </Alert>
        </Snackbar>

                )}

        
                <Routes>
                    <Route path='/' element={<Hero heroAds={heroAds}/>}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/logout' element={<Logout />}/>
                    
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/create-ad' element={<AuthGuard><CreateAd onCreateAdSubmit={onCreateAdSubmit}/></AuthGuard>}/>
                    <Route path='/catalog' element={<Catalog ads={ads}/>}/>
                    <Route path='/search' element={<Search/>}/>
                    <Route path='/catalog/:adId' element={<AdDetails onDeleteAdSubmit={onDeleteAdSubmit} />} />
                    <Route path='/catalog/:adId/edit' element={<AuthGuard><EditAd onAdEditSubmit={onAdEditSubmit} /></AuthGuard>} />
                    <Route path='/profile/:profileId' element={<AuthGuard><Profile /></AuthGuard>}/>

                   

                </Routes>    
            </main>
            </AuthContext.Provider>
        </>
    )
}

export default App
