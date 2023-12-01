import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import BeerApi from './pages/BeerApi';
import BeerDetail from './pages/BeerDetail';
import BeerDetailRandom from './pages/BeerDetailRandom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/beerapi' element={<BeerApi />}/>
          <Route path='/beers/:beerID' element={<BeerDetail />}/>
          <Route path='/randombeer' element={<BeerDetailRandom />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
