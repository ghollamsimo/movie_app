import React from 'react'
import '../style/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   
  <footer className='footer__container'>
            <div className='footer__container-links'>
                <p>©Mohamed Ghollam 2023</p>
               <Link to="/"> <a>Movie</a></Link>
               <Link to="/tvshows"><a>TvShow</a></Link> 
                <Link to="/trending"><a>Trending</a></Link>
                <Link to="/pricing"> <a>Pricing</a></Link>
                <Link><a href="https://developers.themoviedb.org/3" target="_blank" rel="noopener noreferrer">Api</a></Link>
            </div>
            <div className='footer__container-info'>

            </div>
        </footer>
  )
}

export default Footer