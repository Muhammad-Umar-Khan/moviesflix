import "./Movie.css";

const Movie = ({ movie }) => {
  const IMAGES_API = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="movie">
      <img
        alt="movie"
        src={
          IMAGES_API + movie.poster_path ||
          "https://m.media-amazon.com/images/M/MV5BYjA2M2YxMjQtOTIwOS00ODIyLThmYWEtM2Y1NGFkNjI1YmNkXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
        }
      ></img>
      <div className="movie-info">
        <h5>{movie.title}</h5>
        <span>Vote:{movie.vote_average}</span>
      </div>
      <div className="movie-overview">
        <h4>Overview</h4>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
