import {Routes,Route} from 'react-router-dom'
import { MainNavigation } from './components/Navigation/MainNavigation';
import {Header} from './components/Header/Header'
import {About} from './components/About/About'
import {Register} from './components/Register/Register'
import './App.css';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <header className="App-header">
      

       <Routes>
          <Route path='/' element={ <Header/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/allads' element={<h1>Ads page</h1>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<h1>Login page</h1>}/>

          <Route path='*' element={<h1>Opps 404 - page not found</h1>}/>

       </Routes>
      </header>
    </div>
  );
}

export default App;
