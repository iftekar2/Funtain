import Navbar from "./Navbar";
import SlidingMovies from "./Compunents/SlidingMovies";
import MovieOptionsButton from "./Compunents/MovieOptionsButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <SlidingMovies />
        <MovieOptionsButton />
      </header>
    </div>
  );
}

export default App;
