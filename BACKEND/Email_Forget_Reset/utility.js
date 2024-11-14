const TMDB_ENDPOINT = {
  // Home Page
  fetchcurrentMovies: "/movie/now_playing",
  fetchTrending: `/trending/all/week`,
  fetchPopular: `/trending/all/week`,
  fetchUpcoming: `/movie/upcoming?include_video=true`,
  // movies
  fetchTopRated: `/movie/top_rated?include_video=true`,
  fetchActionMovies: `/discover/movie?language=en-US&with_genres=28`,
  fetchComedyMovies: `/discover/movie?language=en-US&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?language=en-US&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?language=en-US&with_genres=10749`,
  fetchAnimeMovies: "/discover/movie?language=en-US&with_genres=16",
  // tv enpoints
  fetchActionTvShows: `/discover/tv?language=en-US&with_genres=10759`,
  fetchComedyTvShows: `/discover/tv?language=en-US&with_genres=35`,
  fetchMysteryTvShows: `/discover/tv?language=en-US&with_genres=9648`,
  fetchDramaTvShows: `/discover/tv?language=en-US&with_genres=18`,
  fetchCrimeTvShows: `/discover/tv?language=en-US&with_genres=80`,
};

const tmdbBaseUrl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};

const getMediaList = async (url) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

module.exports = {getMediaList,tmdbBaseUrl,TMDB_ENDPOINT};