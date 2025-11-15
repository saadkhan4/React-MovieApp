import React from "react";
import "./App.css"
import Navbar from "./assets/components/Navbar";
import MovieList from "./assets/components/MovieList/MovieList";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="New Release" />
      <MovieList type="top_rated" title="High Rated" />
      <MovieList type="upcoming" title="Coming Soon" />
    </div>
  );
}

export default App;