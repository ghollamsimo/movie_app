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

export const Container = React.createContext()

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggle, setToggle]= useState(true)
  const [inputValue, setInputValue] = useState("")
  return (
    <Container.Provider value={{toggle, inputValue}}>
    <Fragment>
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-center">
          
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <div className="nav-options">
          
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Raleway] links">
        <h1 className="logo">CimaFlex</h1>
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
          <div className="login">
          <button><Link to="/login">Login</Link></button>
        </div>    
        </ul>
        </div>
        <div className='input-grouup'>
        <input type="text" placeholder='search Wathever you Want ' onChange={(e) => setInputValue (e.target.value)} />
        <HiSearch fontSize={21} color="#fff" id='search' />
        
        </div>
        {/* Mobile nav */}
        <div className="mobile">
        <ul
          className={`links_
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-index-1 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li><h1 className="logo">CimaFlex</h1></li>
           {/* <h1 className="logo">CimaFlex</h1> */}
          <li><NavLink to="/">Movies</NavLink></li>
          <li><NavLink to="/tvshows">TvShow</NavLink></li>
          <li><NavLink to="/trending">Trending</NavLink></li>
          <li><NavLink to="/pricing">Pricing</NavLink></li>
          <div className="login_mobile">
          <button><Link to="/login">Login</Link></button>
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
    </Routes>
    </Fragment>
    </Container.Provider>
  );
};

export default Navbar;
