import {Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import './App.css';
import Navi from './header/Navi';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Manufacture from './pages/Manufacture';
import History from './pages/History';
import Fiat from './pages/Fiat';
import FiatDetail from './pages/FiatDetail';
import Footer from './pages/Footer';
import Tortellini from './pages/Tortellini';
import Scorza from './pages/Scorza';
import Recipe from './pages/Recipe';
// json-server --watch db.json --port 5000

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{
console.log(authenticate)
  },[authenticate])
  return (
    <div>
      <Navi/>
      <Routes>
        <Route path='' exact={true}  element={<Home/>} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/manufacture' element={<Manufacture/>} />
        <Route path='/history' element={<History/>} />
        <Route path='/fiat' element={<Fiat/>}/>
        <Route path='/fiatDetail/:id' element={<FiatDetail/>}/>
        <Route path='/tortellini' element={<Tortellini/>}/>
        <Route path='/scorza' element={<Scorza/>}/>
        <Route path='/recipe' element={<Recipe/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;