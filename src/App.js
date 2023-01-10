import './App.css';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';
import Services from './component/pages/Services';
import Product from './component/pages/Product';
import Sign_Up from './component/pages/Sign_Up';
import Consulting from './component/pages/Consulting';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/consulting' element={<Consulting/>}/>
      <Route path='/sign-up' element={<Sign_Up/>}/>

    </Routes>
     
    </>
  );
}

export default App;
