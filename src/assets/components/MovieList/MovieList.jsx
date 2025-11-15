import React, { useEffect, useState } from "react";
import _ from "lodash";
import Fire from "../../../assets/images/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({type,title}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  //Store karta hai user ka current sort preference
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  //Movies ko unki rating se filter karta hai
  const handleFilter = (rate) => {
    setMinRating(rate);

    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setFilterMovies(filtered);
  };

  //Sort ke options update karta hai (by/order)
  const handleSort = (event) => {
    const { name, value } = event.target;

    setSort((prev) => ({ ...prev, [name]: value }));
  };

  const fetchMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=c40a7ef9fbbf4be11423356d80aaca21`
    );
    const data = await response.json();
    setMovies(data.results);
    setFilterMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    //agar sort.by ki value "default" nahi hai, tabhi sort karo.
    if (sort.by !== "default") {
      // _.orderBy() lodash ka function hai jo array ko sort karta hai.
      // [sort.by] date or rating   // [sort.order] asc or desc
      const sortedMovies = _.orderBy(filterMovies, [sort.by], [sort.order]);
      setFilterMovies(sortedMovies);
    }
    // Jab bhi sort change hoga, poora useEffect dobara chalega.
  }, [sort, filterMovies]);

  return (
    <section className="movie-list" id={type}>
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          {title}{" "}<img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs ">
          <FilterGroup minRating={minRating} onRatingClick={handleFilter} />
          <select
            name="by"
            id="sortBy"
            onChange={handleSort}
            value={sort.by}
            className="movie_sorting"
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            name="order"
            id="order"
            onChange={handleSort}
            value={sort.order}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
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
