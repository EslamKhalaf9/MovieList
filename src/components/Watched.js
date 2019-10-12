import React from "react";
import Movie from "./Movie";
import { MoviesContext } from "../Contexts/MoviesContext";

const Watched = () => {
  return (
    <MoviesContext.Consumer>
      {state => {
        const { movies, toggleWatch, toggleFavorite } = state;
        const toWatchMovieList = movies.filter(
          movie => movie.watched !== false
        );
        // console.log(state)
        // console.log(togglewatch)
        const MovieList = toWatchMovieList.map(movie => (
          <Movie
            details={movie}
            key={movie.id}
            togglewatch={toggleWatch}
            toggleFavorite={toggleFavorite}
          />
        ));
        return (
          <section className="watched">
            <div className="container">{MovieList}</div>
          </section>
        );
      }}
    </MoviesContext.Consumer>
  );
};

export default Watched;
