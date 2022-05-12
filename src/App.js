import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute'

function App() {
  const [authenticate,setAuthenticate] = useState(false)

  useEffect(()=>{
    console.log("avvaa",authenticate)
  },[authenticate])

  return (

    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />}/>
        <Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
      </Routes>
    </div>
  );
}

export default App;