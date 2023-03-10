import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import {Container} from './Navbar'
import {AiFillPlayCircle} from 'react-icons/ai'
import {SlClose} from 'react-icons/sl'
import NOIMG from '../assets/no_img.jpg'
import Aos from 'aos'
import "aos/dist/aos.css"
import TrailerTrend from '../video/TrailerTrend'

const Trending = () => {
    //Animation Scrool
    useEffect(() =>{
      Aos.init({duration:1500});
    }, [])
  
  
  const {toggle, inputValue } = useContext(Container)
  const input =inputValue
  const Api = 'https://api.themoviedb.org/3'
  const shown = input ? 'search' : 'discover'
  const TrendsShown ='/trending/all/week'
  const [trailer, setTrailer] =useState(true)
  const [trendTitle, setTrendTitle] = useState('')
  const [trendArray, setTrendArray] = useState([])
  const Imges = 'https://image.tmdb.org/t/p/w500/'

  const Trends =async () =>{
    const data = await axios.get(`${Api}${TrendsShown}`,{
      params:{
        api_key:'515a59e45f8a49bc7ac768406359f529',
        query:input
      }
    })
    const results= data.data.results
    setTrendArray(results)
    
  }

  useEffect(() =>{
    setTimeout(() =>{
      Trends()
    }, 100)
    
  },[input])

  const TrendTitle = (trend) =>{
    setTrendTitle(trend.title)
    setTrailer(!trailer)
  } 
  return (
    <Fragment>
      <div className={toggle ? "mainBg_Color" : 'secondaryBgColor'}>
          <div className='movies--container'>
            {trendArray.map((trend) =>{
              return(
                <Fragment>
                <div id={trailer ? 'container' : 'No_Container'} data-aos="fade-right">
                 <AiFillPlayCircle color='#fff' fontSize={40} id={trailer ? 'play_Icon' : 'hide'} onClick={() => trendTitle(trend)}/>
                 <img src={trend.poster_path ? `${Imges}${trend.poster_path}` : NOIMG } alt="" onClick={() => TrendTitle(trend)} />
                 <h2 className="text-center text-white"
                >
                {trend.title}
              </h2> 
                </div>
                </Fragment>
              )
            })}
             {trailer ? console.log : <TrailerTrend TrendTitle={trendTitle}/>}
             <SlClose id={trailer ? 'Nothing' : 'Exit1' } 
       className={toggle ? 'DarkTheme' : 'LightThemeClose'}
       fontSize={55} color="#fff" cursor={'pointer'} 
       onClick={() => setTrailer(true)}
       />  
          </div>
      </div>
    </Fragment>
  )
}

export default Trending