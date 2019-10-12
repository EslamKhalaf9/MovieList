import React from "react";
import Movie from "./Movie";
import { MoviesContext } from "../Contexts/MoviesContext";

class ToWatch extends React.Component {
  render() {
    return (
      <MoviesContext.Consumer>
        {(state) => {
          const {movies, toggleWatch} = state;
          const toWatchMovieList = movies.filter(movie => (
            movie.watched !== true
          ));
          console.log(state)
          // console.log(togglewatch)
          const MovieList = toWatchMovieList.map(movie => (
            <Movie details={movie} key={movie.id} togglewatch={toggleWatch}/>
          ))
          return(
            <section className="toWatch">
              <div className="container">
                {MovieList}
              </div>
            </section>
          );
        }}
      </MoviesContext.Consumer>
    );
  }
}
export default ToWatch;
