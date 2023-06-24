

const MovieCard = ({movie}:any) => {
    const IMAGE_URL = "https://image.tmdb.org/t/p/original";
  return (
   <div>
     <>
        <img    className='w-[150px] md:w-[350px]  rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in' src={IMAGE_URL+movie.backdrop_path}/>
        <h2 className='w-[110px] md:w-[260px] text-white mt-2'>{movie.title}</h2>
    </>
   </div>
  )
}

export default MovieCard