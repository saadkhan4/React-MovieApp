import React, { useEffect, useState } from "react";
import Fire from "../../../assets/images/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const handleFilter = (rate) => {
    setMinRating(rate);

    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setFilterMovies(filtered);
  };

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=c40a7ef9fbbf4be11423356d80aaca21"
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
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
        <FilterGroup minRating={minRating} onRatingClick={handleFilter}/>
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
        {filterMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
