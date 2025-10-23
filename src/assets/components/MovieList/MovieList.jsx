import React, { useEffect, useState } from "react";
import Fire from "../../../assets/images/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const handleFilter = (rate) => {
    handleFilter(rate)
  }

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c40a7ef9fbbf4be11423356d80aaca21"
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <section className="movie-list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs ">
          <ul className="align_center movie_filter">
            <li
              className="movie_filter_item active"
              onClick={() => handleFilter(8)}
            >
              8+
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(7)}>
              7+
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(6)}>
              6+
            </li>
          </ul>
          <select name="sortBy" id="sortBy" className="movie_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="order" id="order" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
