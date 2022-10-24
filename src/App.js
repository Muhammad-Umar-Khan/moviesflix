import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./components/Movie.css";
import Movie from "./components/Movie";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //Moies API for featured and searching;
  const FEATURED_MOVIES =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e30bf5da7850b003dc0bdce0d1596fbb&page=";
  const SEARCH_MOVIE = `https://api.themoviedb.org/3/search/movie?api_key=e30bf5da7850b003dc0bdce0d1596fbb&language=en-US&query=${search}&page=1&include_adult=false`;

  const getMovies = (API) => {
    axios.get(API).then((res) => {
      setMovies(res.data?.results);
    });
  };

  useEffect(() => {
    getMovies(FEATURED_MOVIES);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      getMovies(SEARCH_MOVIE);
      setSearch("");
    }
  };

  return (
    <>
      <header className="search">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
      </header>
      <div className="app-container">
        {movies.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </>
  );
}

export default App;
