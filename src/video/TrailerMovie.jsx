import React, {Fragment, useEffect, useState} from 'react'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer'
import '../style/TrailerMovi.css'

const TrailerMovie = ({movieTitle}) => {
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] = 
      useState("");

      function handleSearch() {
        setVideo(movieTitle)
        movieTrailer(video).then((res) => {
          setVideoURL(res);
        });
      }
      useEffect(() => {
        handleSearch()
      },[videoURL])
       
  return (
    <Fragment>
        <div className='Container'>

        </div>
        <div className='player'>
        <ReactPlayer url={videoURL} controls={true}/>
        </div>
    </Fragment>
  )
}

export default TrailerMovie