import {useEffect,useState}from 'react'
import Globalapi from '../services/Globalapi'
import MovieCard from './MovieCard'


const Movie = ({genreId}:any) => {
    
    const [movie,setMovie]=useState([])
   useEffect(()=>{
    getMovies()
   },[])
  
    
    const getMovies=()=>{
Globalapi.getMovieByGenreId(genreId).then(resp=>{
    console.log(resp.data.results)
    setMovie(resp.data.results)
})
    }
  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-none pt-3 px-3 pb-4'>
{movie.map((item)=>(
    <MovieCard movie={item}/>
   
))}

    </div>
  )
}

export default Movie