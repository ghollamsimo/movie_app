import React, {Fragment, useContext, useEffect, useState} from 'react'
import axios from 'axios'
import {Container} from './Navbar'
import {AiFillPlayCircle} from 'react-icons/ai'
import '../style/video.css'
import NOIMG from '../assets/no_img.jpg'
const Movies = () => {
  const {toggle, inputValue } = useContext(Container)
  const input =inputValue
  const [moviesDatat, setMoviesData] = useState([])
  const {trailer, setTrailer} =useState(true)
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
    MovieCall()
   },[input])
   console.log(moviesDatat)
  return (
    <Fragment>
        <div className={toggle ? "" : ''}>
          <div className='movies--container'>
        {moviesDatat.map((movie) => {
          return(
          <Fragment>
            <div id={trailer ? 'container' : 'No_Container'}>
              {/* <AiFillPlayCircle fontSize={40} color="#FFF" id='play_Icon'/> */}
              <img src={movie.poster_path ? `${Imges}${movie.poster_path}` : NOIMG} alt="" />
              <h5 id={movie.title.length > 40 ? 'smaller-Text' : ""}
              className={toggle ? 'mainColor' : 'secondaryColor'}
              >
                {movie.title}
              </h5>
            </div>
            </Fragment>
        )
        })}
        </div>
        </div>
      </Fragment>
  )
}

export default Movies