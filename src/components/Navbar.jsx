import React, { useState } from "react";
import Movies from './Movies'
import TvShows from './TvShows'
import Trending from './Trending'
import Pricing from './Pricing'
import Login from '../pages/Login'
import {HiSearch} from 'react-icons/hi'
import { NavLink, Route, Routes, Link } from 'react-router-dom'
import '../style/NavStyle.css'
import { Fragment } from "react";
import Registration from "../pages/Registration";

export const Container = React.createContext()

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(false)
  const [toggle, setToggle]= useState(true)
  const [inputValue, setInputValue] = useState("")
  return (
    <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
    <nav className="bg-white w-full" >
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-center">
          
          <div cursor={'pointer'} className="text-3xl md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}  ></ion-icon>
          </div>
        </div>
        <div className="nav-options" onClick={() => setClose(close)}>
          
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Raleway] links">
        <Link to="/"><h1 className="logo">CimaFlex</h1></Link>
        <NavLink to="/">
          <span id={toggle ? 'Movies':'MoviesLight'}>Movies</span>
          </NavLink>
          <NavLink to="/tvshows">
          <span id={toggle ? 'Movies':'MoviesLight'}>TvShow</span>
          </NavLink>
          <NavLink to="/trending">
          <span id={toggle ? 'Movies':'MoviesLight'}>Trending</span>
          </NavLink>
          <NavLink to="/pricing">
          <span id={toggle ? 'Movies':'MoviesLight'}>Pricing</span>
          </NavLink>     
          <div className="login flex-col justify-center items-center">
          <Link className="text-center login_links" to="/login"> <button className="login_button flex-col justify-center items-center">Login</button></Link>
        </div>    
        </ul>
        </div>
        <div className='input-grouup'>
        <input type="text" placeholder='search Wathever you Want ' onChange={(e) => setInputValue (e.target.value)} />
        <HiSearch fontSize={21} color="#fff" id='search' />
        
        </div>
        {/* Mobile nav */}
        <div className="mobile w-full">
        <ul
         onClick={() => setClose(!close)}
          className={`links_
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-index-1 ${open ? "left-0" : "left-[-100%]"}
        `}
        onChange={() => setClose(close)}
        cursor={'pointer'}
        >
          <li><h1 className="logo text-center">CimaFlex</h1></li>
           {/* <h1 className="logo">CimaFlex</h1> */}
          <li><NavLink to="/">Movies</NavLink></li>
          <li><NavLink to="/tvshows">TvShow</NavLink></li>
          <li><NavLink to="/trending">Trending</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <div className="login_mobile">
          <button className="login__btn"><Link to="/login">Login</Link></button>
        </div>
        </ul>
        </div>
      </div>
    </nav>
      <Routes>
        <Route path="" element={<Movies/>}/>
        <Route path="tvshows" element={<TvShows/>}/>
        <Route path="trending" element={<Trending/>}/>
        <Route path="pricing" element={<Pricing/>}/>  
        <Route path="login" element={<Login/>}/>
        <Route path='signup' element={<Registration/>}/>
    </Routes>
    </Fragment>
    </Container.Provider>
  );
};

export default Navbar;
