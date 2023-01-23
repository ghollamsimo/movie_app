import React, { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import {AiFillPlayCircle, AiOutlineClose} from 'react-icons/ai' 
import NOIMG from '../assets/no_img.jpg'
import {Container} from './Navbar'
import '../style/video.css'
import TrailerTv from '../video/TrailerTv'



const TvShows = () => {
  const {toggle, inputValue } = useContext(Container)
  const input =inputValue
  const [showData, setShowData] = useState([])
  const [trailer, setTrailer] = useState(true)
  const [title, setTitle] = useState('')
  const shown = input ? 'search' : 'discover'
  const Api = `https://api.themoviedb.org/3/${shown}/tv`
  const Imges = 'https://image.tmdb.org/t/p/w500/'
  const TvShows = async () => {
    const data = await axios.get(Api, {
      params:{
        api_key:'515a59e45f8a49bc7ac768406359f529',
        query:input
      }
    })
    const results =  (data.data.results)
    setShowData(results)
  }
  useEffect(() => {
    TvShows()
  },[input])

  const TvShowTitle = (shows) =>{
    setTitle(shows.name)
     setTrailer(!trailer)
  }
  return (
    <Fragment>
       <div className={toggle ? "mainBg_Color" : 'secondaryBgColor'}>
          <div className='movies--container'>
      {showData.map((shows)=>{
        return(
          <Fragment key={shows.id}>
            <div id={trailer ? 'container' : 'No_Container'}>
               <AiFillPlayCircle fontSize={40} color="#FFF" id={trailer ?  'play_Icon' : 'hide'} onClick={() => TvShowTitle(shows)}/> 
              <img src={shows.poster_path ? `${Imges}${shows.poster_path}` : NOIMG}
               alt=""
                onClick={() => TvShowTitle(shows)}
              />
              <h5 className={toggle ? 'mainColor' : 'secondaryColor'}
               id={shows.name.length > 40 ? 'smaller-Text' : ""}>
                {shows.name}
              </h5>
            </div>
          </Fragment>
        )
      })}
     {trailer ? console.log : <TrailerTv TvShowsTitle={title}/>}
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

export default TvShows