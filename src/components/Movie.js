import React from "react";
import Tag from "./Tag";

const Movie = ({ details, togglewatch, toggleFavorite }) => {
  const {
    title,
    year,
    genre,
    cast,
    description,
    id,
    watched,
    favorite
  } = details;
  const genreList = genre.map((tag, index) => <Tag name={tag} key={index} />);
  const castList = cast.map((tag, index) => <Tag name={tag} key={index} />);
  // console.log(togglewatch);
  let watchedColor = "#555";
  let staredColor = "#555";
  watched ? (watchedColor = "gold") : (watchedColor = "#555");
  favorite ? (staredColor = "gold") : (staredColor = "#555");
  return (
    <div className="movie">
      <div className="title">
        {title} <span>({year})</span>
        <i
          className="far fa-check-square"
          onClick={() => togglewatch(id)}
          style={{ color: watchedColor }}
        ></i>
        {watched ? (
          <i
            className="fas fa-star"
            style={{ color: staredColor }}
            onClick={() => toggleFavorite(id)}
          ></i>
        ) : null}
      </div>
      <div className="genre">{genreList}</div>
      <div className="cast">{castList}</div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Movie;
