import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + process.env.REACT_APP_API_KEY
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

/* export default { getTrendingVideos, getMovieByGenreId };
 */

const api = { getTrendingVideos, getMovieByGenreId };

export default api;
