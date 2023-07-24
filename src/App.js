import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Cocktails from './components/Cocktails/Cocktails';
import AboutUs from './components/AboutUs/AboutUs';
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/cocktails' element={<Cocktails></Cocktails>}></Route>
        <Route path='/about_us' element={<AboutUs></AboutUs>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
