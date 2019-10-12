import React, { createContext } from "react";

export const MoviesContext = createContext();

class MoviesContextProvider extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Avengers: Infinity War",
        year: "2018",
        genre: ["action", "adventure", "SCI-FI"],
        cast: [
          "Robert Downey Jr.",
          "Chris Hemsworth",
          "Mark Ruffalo",
          "Chris Evans"
        ],
        description:
          "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        watched: true,
        favorite: false
      },
      {
        id: 2,
        title: "It: Chapter Two",
        year: "2019",
        genre: ["Drama", "Fantasy", "Horror"],
        cast: ["Jessica Chastain", "James McAvoy", "Bill Hader"],
        description:
          "Twenty-seven years after their first encounter with the terrifying Pennywise, the Losers Club have grown up and moved away, until a devastating phone call brings them back.",
        watched: false,
        favorite: false
      },
      {
        id: 3,
        title: "Joker",
        year: "2019",
        genre: ["Crime", "Drama", "Thriller"],
        cast: [
          "Joaquin Phoenix",
          "Robert De Niro",
          "Zazie Beetz",
          "Frances Conroy"
        ],
        description:
          'In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: "The Joker".',
        watched: true,
        favorite: true
      },
      {
        id: 4,
        title: "The Dark Knight",
        year: "2008",
        genre: ["action", "Crime", "Drama"],
        cast: [
          "Christian Bale",
          "Heath Ledger",
          "Aaron Eckhart",
          "Michael Caine"
        ],
        description:
          "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        watched: false,
        favorite: false
      }
    ]
  };

  toggleWatch = id => {
    const oldmovies = this.state.movies;
    oldmovies.forEach(movie => {
      if (movie.id === id) {
        movie.watched = !movie.watched;
        movie.favorite = false;
      }
    });
    this.setState({ movies: oldmovies });
  };
  toggleFavorite = id => {
    const oldmovies = this.state.movies;
    oldmovies.forEach(movie => {
      if (movie.id === id) movie.favorite = !movie.favorite;
    });
    this.setState({ movies: oldmovies });
  };

  render() {
    return (
      <MoviesContext.Provider
        value={{
          ...this.state,
          toggleWatch: this.toggleWatch,
          toggleFavorite: this.toggleFavorite
        }}
      >
        {this.props.children}
      </MoviesContext.Provider>
    );
  }
}

export default MoviesContextProvider;
