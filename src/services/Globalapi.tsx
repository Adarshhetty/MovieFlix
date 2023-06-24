import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "86638bda3a11005e9a1544d0dfad0d56";

const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=86638bda3a11005e9a1544d0dfad0d56";

//https://api.themoviedb.org/3/trending/all/day?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf
const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId=(id:any)=>
axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
