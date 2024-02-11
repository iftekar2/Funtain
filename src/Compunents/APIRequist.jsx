const requists = {
  fetchTrending: `trending/allweek?api_key=${process.env.REACT_APP_API_KEY}&language=end-US&page=1&pageSize=5`,
  fetchActionMovies: `discover/movies?api_key=${process.env.REACT_APP_API_KEY}&with_genres=5`,
  fetchRomanceMovies: `discover/movies?api_key=${process.env.REACT_APP_API_KEY}&with_genres=5`,
  fetchAnimationMovies: `discover/movies?api_key=${process.env.REACT_APP_API_KEY}&with_genres=5`,
  //   fetchHorrorMovies: `discover/movies?api_key=${process.env.REACT_APP_API_KEY}&with_genres=5`,
};

export default requists;
