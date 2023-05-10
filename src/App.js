import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import "./index";
const api_key = process.env.REACT_APP_API_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;

const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query="`;

const HORROR_API = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=27"`;

function App() {
  const [movies, setMovies] = useState([false]);
  const [searchTerm, setSearchTerm] = useState("");
  {
    /*const [HorrorMovies, setHorrorMovies] = useState([true]);*/
  }
  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  {
    /*useEffect(() => {
    getHorrorMovies(HORROR_API);
  }, []);
  const getHorrorMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setHorrorMovies(data.results);
      });
  };*/
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <a href="">
          <img src="favicon.ico" className="header-image"></img>
        </a>

        <form onSubmit={handleOnSubmit}>
          <input
            className="search"
            type="search"
            placeholder="Search for movies"
            value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div>
        {/*<button onClick={() => setHorrorMovies(false)}>Show all movies</button>
         <button onClick={() => setHorrorMovies(true)}>
          Show horror movies
  </button>*/}

        {/*<div className="movie-container2">
          {HorrorMovies.length > 0 &&
            HorrorMovies.map((movie) => <Movie key={movie.id} {...movie} />)}
          </div>*/}

        <div className="movie-container">
          {movies.length > 0 &&
            movies.map((movie) => (
              <Movie key={`${movie.id}-${movie.title}`} {...movie} />
            ))}
        </div>
      </div>
    </>
  );
}
export default App;
