import React, {Fragment, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Container} from './Navbar'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai'
import '../style/video.css'
import NOIMG from '../assets/no_img.jpg'
const Movies = () => {
  const {toggle, inputValue } = useContext(Container)
  const input =inputValue
  const [moviesDatat, setMoviesData] = useState([])
  const [trailer, setTrailer] =useState(true)
  const [movieTitle, setMovieTitle] = useState('')
  const shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${shown}/movie`
  const Imges = 'https://image.tmdb.org/t/p/w500/'
  const MovieCall = async () => {
    const data = await axios.get(Api, {
      params:{
        api_key:'515a59e45f8a49bc7ac768406359f529',
        query:input
      }
    })
    const results= data.data.results
    setMoviesData(results)
    
   }
   useEffect(() => {
    setTimeout(() =>{
      MovieCall()
    }, 100)
   },[input])
   console.log(moviesDatat)

   const Moviestitle =(movie)=>{
    setMovieTitle(movie.title)
    setTrailer(!trailer)
   }
  return (
    <Fragment>
        <div className={toggle ? "mainBg_Color" : 'secondaryBgColor'}>
          <div className='movies--container'>
        {moviesDatat.map((movie) => {
          return(
          <Fragment>
            <div id={trailer ? 'container' : 'No_Container'}>
               <AiFillPlayCircle fontSize={40} color="#FFF" id={trailer ?  'play_Icon' : 'hide'} onClick={() => Moviestitle(movie)}/>
              <img src={movie.poster_path ? `${Imges}${movie.poster_path}` : NOIMG} alt=""onClick={() => Moviestitle(movie)} />
              <h5 id={movie.title.length > 40 ? 'smaller-Text' : ""}
              className={toggle ? 'mainColor' : 'secondaryColor'}
              >
                {movie.title}
              </h5>
            </div>
          </Fragment>
        )
        })}
           <AiOutlineClose id={trailer ? 'Nothing' : 'Exit1' } 
       className={toggle ? 'DarkTheme' : 'LightThemeClose'}
       fontSize={55} color="#fff" cursor={'pointer'} 
       onClick={() => setTrailer(true)}
       />  
        </div>
        </div>
      </Fragment>
  )
}

export default Movies