import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Movie from "./components/Movie";

const FEATURED_MOVIES =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e30bf5da7850b003dc0bdce0d1596fbb&page=1";
const SEARCH_MOVIE =
  "https://api.themoviedb.org/3/search/movie?api_key=e30bf5da7850b003dc0bdce0d1596fbb&language=en-US&query=Avengers&page=1&include_adult=false";

function App() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    axios.get(FEATURED_MOVIES).then((res) => {
      setMovies(res?.data.results);
    });
  }, []);

  console.log(movies);

  return (
    <div className="app-container">
      <Movie />
    </div>
  );
}

export default App;
