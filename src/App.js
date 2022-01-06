import react, {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/comps/nav/Navbar';
import { Home } from "./components/pages/home/home";
import { Hero } from "./components/comps/homeComps/hero";
import { TestiContainer } from "./components/comps/homeComps/testiContainer";
import { Shop } from "./components/pages/shop/shop";
import { Cardscont } from "./components/comps/shopComp/cardscont";
import carsData from "./components/data/carsData";
import BookingForm from "./components/pages/bookingForm/BookingForm";
import Cart from "./components/pages/cart/cart";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import About from "./components/pages/about/about";
import Profile from "./components/pages/profile/profile";

function App() {
  let [logged, setLogged]=useState(localStorage.getItem('loggedUser'))
  return (
    <BrowserRouter>
      <Header logged = {logged} setLogged={setLogged} />
      <Routes>
        <Route path="/login" element={
        <Login logged = {logged} setLogged = {setLogged}>
          <Hero height="20vh" heading={true} hText="Login" />
        </Login>}/>
        <Route path="/signup" element={
        <Register logged = {logged} setLogged = {setLogged}>
          <Hero height="20vh" heading={true} hText="Register" />
        </Register>}/>
        <Route path="/profile" element={<Profile logged={logged}>
          <Hero height="20vh" heading={true} hText="Profile" />
        </Profile>}/>
        <Route path="/" element = {
          <Home>
            <Hero heading={true} hText="Let's Burn Some Wheels !" button={true} btnText = "Start Burning!" />
            <TestiContainer />
          </Home>} />
          <Route path="/shop" element={
            <Shop>
              <Hero height="20vh" heading ={true} hText ='Explore Rides' />
              <Cardscont />
            </Shop>
          } />
          <Route
            path="/bookingForm/:id"
            element={<BookingForm cars={carsData} />}
          />
          <Route path='/cart/:id' element={<Cart cars = {carsData} />} />
          <Route path='/aboutus' element={<About>
            <Hero height="20vh" heading ={true} hText ='About Us' />
          </About>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
