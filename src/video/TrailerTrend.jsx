import React, {Fragment, useEffect, useState} from 'react'
import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer'
import '../style/TrailerMovi.css'

const TrailerTrend = ({TrendTitle}) => {
    const [video, setVideo] = useState("inception");
    const [videoURL, setVideoURL] = 
      useState("");

      function handleSearch() {
        setVideo(TrendTitle)
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
    <ReactPlayer className='video' url={videoURL} controls={true} muted={false } />
    </div>
</Fragment>
  )
}

export default TrailerTrend