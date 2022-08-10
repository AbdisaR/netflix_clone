import {useState, useEffect} from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
function Row({title, fetchrequest , isLargeRow}){
    const baseURL="https://image.tmdb.org/t/p/original"
    const [movies,setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");
    useEffect(()=>{
        request();
    }, [fetchrequest]);

  async function request() {

        const response = await fetch(`https://api.themoviedb.org/3${fetchrequest}`);
        const data =await response.json();
        setMovies(data.results);
        return data.results;
    };
    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || "").then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error)=>console.log(error));
        }
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
 return(
    <div>
        <h2>{title}</h2>
        <div className="row">{movies.map( image =>(
            <img onClick={()=> handleClick(image)} className={isLargeRow ? "row__image__large" : "row__image" } key={image.id} src={`${baseURL}${isLargeRow ? image.poster_path : image.backdrop_path}`} alt={image.name}/>
        ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
 ); 
}
export default Row;
