import React from 'react'
import "./MovieCard.css";
import Star from "../../../assets/images/star.png"

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
        alt=""
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie name</h3>
        <div className="align_center movie_date_rate">
          <p>10-10-2025</p>
          <p>
            8.5 <img src={Star} alt="" className="card_emoji" />
          </p>
        </div>
        <div className="movie_description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          </p>
        </div>
      </div>
    </a>
  );
}

export default MovieCard