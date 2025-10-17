import React from "react";
import Fire from "../../../assets/images/fire.png";
import "./MovieList.css";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <section className="movie-list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="align_center movie_list_fs ">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+</li>
            <li className="movie_filter_item">7+</li>
            <li className="movie_filter_item">6+</li>
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
        <MovieCard />
          </div>
    </section>
  );
};

export default MovieList;
