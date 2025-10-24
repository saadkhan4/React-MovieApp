import React from "react";

const FilterGroup = ({ minRating , onRatingClick }) => {
  return (
    <ul className="align_center movie_filter">
      <li
        className={`movie_filter_item ${minRating === 8 ? "active" : ""}`}
        onClick={() => onRatingClick(8)}
      >
        8+
      </li>
      <li
        className={`movie_filter_item ${minRating === 7 ? "active" : ""}`}
        onClick={() => onRatingClick(7)}
      >
        7+
      </li>
      <li
        className={`movie_filter_item ${minRating === 6 ? "active" : ""}`}
        onClick={() => onRatingClick(6)}
      >
        6+
      </li>
    </ul>
  );
};

export default FilterGroup;