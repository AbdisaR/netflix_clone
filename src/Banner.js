import React,{useState,useEffect} from 'react'
import requests from './requests'
import './Banner.css'
function Banner() {
    const [movies, setMovie]=useState([]);
    useEffect(()=>{
        fetchMovie()    
    },[]);

    async function fetchMovie(){
        const response = await fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
        const data = await response.json();
        const random = Math.floor(Math.random() * data.results.length);
        setMovie(data.results[random]);
        
    }
    function truncate(str,n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str;
    }
  return (
    <header className="banner"
    style={
        {
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movies?.backdrop_path})`,
            backgroundPosition: "center center"
        }
    }
    >
       <div className="banner__contents">
        <h1 className="banner__title">{movies?.title || movies?.name || movies?.orginal_name}</h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{truncate(movies?.overview,150)}</h1>
       </div>
       <div className="banner__fadeButtom"/>
    </header>
  )
}

export default Banner