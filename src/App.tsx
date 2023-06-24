
import './App.css'
import GenreMovieList from './components/GenreMovieList'
import Header from './components/Header'
import Movie from './components/Movie'
import Production from './components/Production'
import Slider from './components/Slider'

function App() {
  

  return (
    <>
     <div className=''>
   <Header/>
   <Slider/>
   <Production/>
   <GenreMovieList/>
   <Movie/>
     </div>
    </>
  )
}

export default App
